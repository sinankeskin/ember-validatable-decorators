import { IsNumber } from 'class-validator';

export function vTypeNumber(...args) {
  return IsNumber(...args);
}

export { vTypeNumber as typeNumber, vTypeNumber as validatableTypeNumber };
