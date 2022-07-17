import { IsNumberString } from 'class-validator';

export function vStringNumber(...args) {
  return IsNumberString(...args);
}

export {
  vStringNumber as stringNumber,
  vStringNumber as validatableStringNumber,
};
