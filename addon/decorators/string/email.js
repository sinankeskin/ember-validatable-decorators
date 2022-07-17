import { IsEmail } from 'class-validator';

export function vStringEmail(options, validationOptions) {
  return IsEmail(options, validationOptions);
}

export { vStringEmail as stringEmail, vStringEmail as validatableStringEmail };
