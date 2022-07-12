import { MaxDate } from 'class-validator';

export function vMaxDate(date, validationOptions) {
  return MaxDate(date, validationOptions);
}

export { vMaxDate as maxDate, vMaxDate as validatableMaxDate };
