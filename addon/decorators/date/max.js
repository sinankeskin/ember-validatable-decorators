import { MaxDate } from 'class-validator';

export function vDateMax(...args) {
  return MaxDate(...args);
}

export { vDateMax as dateMax, vDateMax as validatableDateMax };
