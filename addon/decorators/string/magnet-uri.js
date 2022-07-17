import { IsMagnetURI } from 'class-validator';

export function vStringMagnetURI(...args) {
  return IsMagnetURI(...args);
}

export {
  vStringMagnetURI as stringMagnetURI,
  vStringMagnetURI as validatableStringMagnetURI,
};
