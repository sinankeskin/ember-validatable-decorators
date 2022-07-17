import { IsDataURI } from 'class-validator';

export function vStringDataURI(...args) {
  return IsDataURI(...args);
}

export {
  vStringDataURI as stringDataURI,
  vStringDataURI as validatableStringDataURI,
};
