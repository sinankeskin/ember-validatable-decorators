import { IsDateString } from 'class-validator';

export function vStringDate(options, validationOptions) {
  return IsDateString(options, validationOptions);
}

export { vStringDate as stringDate, vStringDate as validatableStringDate };
