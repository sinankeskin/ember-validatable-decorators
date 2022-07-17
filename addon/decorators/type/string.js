import { IsString } from 'class-validator';

export function vTypeString(validationOptions) {
  return IsString(validationOptions);
}

export { vTypeString as typeString, vTypeString as validatableTypeString };
