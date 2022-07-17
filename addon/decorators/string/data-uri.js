import { IsDataURI } from 'class-validator';

export function vStringDataURI(validationOptions) {
  return IsDataURI(validationOptions);
}

export {
  vStringDataURI as stringDataURI,
  vStringDataURI as validatableStringDataURI,
};
