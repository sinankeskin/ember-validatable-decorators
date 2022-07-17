import { IsPassportNumber } from 'class-validator';

export function vStringPassportNumber(...args) {
  return IsPassportNumber(...args);
}

export {
  vStringPassportNumber as stringPassportNumber,
  vStringPassportNumber as validatableStringPassportNumber,
};
