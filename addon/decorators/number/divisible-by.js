import { IsDivisibleBy } from 'class-validator';

export function vDivisibleBy(number, validationOptions) {
  return IsDivisibleBy(number, validationOptions);
}

export { vDivisibleBy as divisibleBy, vDivisibleBy as validatableDivisibleBy };
