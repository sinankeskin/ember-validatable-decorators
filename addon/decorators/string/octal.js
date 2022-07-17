import { IsOctal } from 'class-validator';

export function vStringOctal(...args) {
  return IsOctal(...args);
}

export {
  vStringOctal as octal,
  vStringOctal as stringOctal,
  vStringOctal as validatableStringOctal,
};
