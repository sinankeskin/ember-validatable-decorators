import { IsJWT } from 'class-validator';

export function vStringJWT(validationOptions) {
  return IsJWT(validationOptions);
}

export { vStringJWT as stringJWT, vStringJWT as validatableStringJWT };
