import { MinDate } from 'class-validator';

export function vDateMin(date, validationOptions) {
  return MinDate(date, validationOptions);
}

export { vDateMin as dateMin, vDateMin as validatableDateMin };
