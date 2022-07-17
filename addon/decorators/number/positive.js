import { IsPositive } from 'class-validator';

export function vNumberPositive(...args) {
  return IsPositive(...args);
}

export {
  vNumberPositive as positive,
  vNumberPositive as numberPositive,
  vNumberPositive as validatableNumberPositive,
};
