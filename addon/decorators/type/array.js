import { IsArray } from 'class-validator';

export function vTypeArray(validationOptions) {
  return IsArray(validationOptions);
}

export { vTypeArray as typeArray, vTypeArray as validatableTypeArray };
