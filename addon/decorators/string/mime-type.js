import { IsMimeType } from 'class-validator';

export function vStringMimeType(validationOptions) {
  return IsMimeType(validationOptions);
}

export {
  vStringMimeType as stringMimeType,
  vStringMimeType as validatableStringMimeType,
};
