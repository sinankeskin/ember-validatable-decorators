import { IsIn } from 'class-validator';

export function vIn(values, validationOptions) {
  return IsIn(values, validationOptions);
}

export { vIn as in, vIn as validatableIn };
