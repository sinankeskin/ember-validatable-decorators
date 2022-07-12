import { IsPositive } from 'class-validator';

export function vPositive(number, validationOptions) {
  return IsPositive(validationOptions);
}

export { vPositive as positive, vPositive as validatablePositive };
