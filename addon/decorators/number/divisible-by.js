import { IsDivisibleBy } from 'class-validator';

export function vNumberDivisibleBy(...args) {
  return IsDivisibleBy(...args);
}

export {
  vNumberDivisibleBy as divisibleBy,
  vNumberDivisibleBy as numberDivisibleBy,
  vNumberDivisibleBy as validatableNumberDivisibleBy,
};
