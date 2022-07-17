import { IsObject } from 'class-validator';

export function vTypeObject(...args) {
  return IsObject(...args);
}

export { vTypeObject as typeObject, vTypeObject as validatableTypeObject };
