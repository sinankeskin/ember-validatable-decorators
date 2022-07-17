import { IsJWT } from 'class-validator';

export function vStringJWT(...args) {
  return IsJWT(...args);
}

export {
  vStringJWT as jwt,
  vStringJWT as stringJWT,
  vStringJWT as validatableStringJWT,
};
