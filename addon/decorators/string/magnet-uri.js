import { IsMagnetURI } from 'class-validator';

export function vStringMagnetURI(validationOptions) {
  return IsMagnetURI(validationOptions);
}

export {
  vStringMagnetURI as stringMagnetURI,
  vStringMagnetURI as validatableStringMagnetURI,
};
