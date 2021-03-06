import { IsNegative } from 'class-validator';

export function vNumberNegative(...args) {
  return IsNegative(...args);
}

export {
  vNumberNegative as negative,
  vNumberNegative as numberNegative,
  vNumberNegative as validatableNumberNegative,
};
