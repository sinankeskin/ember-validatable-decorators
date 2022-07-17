import { IsDateString } from 'class-validator';

export function vStringDate(...args) {
  return IsDateString(...args);
}

export { vStringDate as stringDate, vStringDate as validatableStringDate };
