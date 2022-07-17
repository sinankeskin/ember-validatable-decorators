import { MaxDate } from 'class-validator';

export function vDateMax(date, validationOptions) {
  return MaxDate(date, validationOptions);
}

export { vDateMax as dateMax, vDateMax as validatableDateMax };
