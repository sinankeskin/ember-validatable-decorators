import { IsJWT } from 'class-validator';

export function vStringJWT(...args) {
  return IsJWT(...args);
}

export { vStringJWT as stringJWT, vStringJWT as validatableStringJWT };
