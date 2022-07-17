import { IsObject } from 'class-validator';

export function vTypeObject(validationOptions) {
  return IsObject(validationOptions);
}

export { vTypeObject as typeObject, vTypeObject as validatableTypeObject };
