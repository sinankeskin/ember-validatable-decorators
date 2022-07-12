import { MinDate } from 'class-validator';

export function vMinDate(date, validationOptions) {
  return MinDate(date, validationOptions);
}

export { vMinDate as minDate, vMinDate as validatableMinDate };
