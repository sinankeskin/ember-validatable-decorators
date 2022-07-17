import { IsMimeType } from 'class-validator';

export function vStringMimeType(...args) {
  return IsMimeType(...args);
}

export {
  vStringMimeType as mimeType,
  vStringMimeType as stringMimeType,
  vStringMimeType as validatableStringMimeType,
};
