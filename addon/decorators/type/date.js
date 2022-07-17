import { IsDate } from 'class-validator';

export function vTypeDate(...args) {
  return IsDate(...args);
}

export { vTypeDate as typeDate, vTypeDate as validatableTypeDate };
