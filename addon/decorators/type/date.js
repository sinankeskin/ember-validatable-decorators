import { IsDate } from 'class-validator';

export function vTypeDate(validationOptions) {
  return IsDate(validationOptions);
}

export { vTypeDate as typeDate, vTypeDate as validatableTypeDate };
