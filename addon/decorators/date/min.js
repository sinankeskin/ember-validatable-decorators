import { MinDate } from 'class-validator';

export function vDateMin(...args) {
  return MinDate(...args);
}

export { vDateMin as dateMin, vDateMin as validatableDateMin };
