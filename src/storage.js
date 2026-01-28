import {ref,watch} from 'vue';
import {useLocalStorage, useSessionStorage} from '@vueuse/core';

export function useStorage(key, defaultValue = null, options = {}) {
  const {type = 'local', watchSource = null} = options;
  let storageRef;

  if (type === 'local') {
    storageRef = useLocalStorage(key, defaultValue);
  } else if (type === 'session') {
    storageRef = useSessionStorage(key, defaultValue);
  } else {
    throw new Error(`Unsupported storage type: ${type}`);
  }

  if (watchSource) {
    watch(watchSource, (newValue) => {
      storageRef.value = newValue;
    }, {immediate: true});
  }

  return storageRef;
}