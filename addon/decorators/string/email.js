import { IsEmail } from 'class-validator';

export function vStringEmail(...args) {
  return IsEmail(...args);
}

export { vStringEmail as stringEmail, vStringEmail as validatableStringEmail };
