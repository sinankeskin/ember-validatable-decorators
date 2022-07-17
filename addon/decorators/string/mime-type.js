import { IsMimeType } from 'class-validator';

export function vStringMimeType(...args) {
  return IsMimeType(...args);
}

export {
  vStringMimeType as stringMimeType,
  vStringMimeType as validatableStringMimeType,
};
