import { IsPostalCode } from 'class-validator';

export function vStringPostalCode(...args) {
  return IsPostalCode(...args);
}

export {
  vStringPostalCode as stringPostalCode,
  vStringPostalCode as validatableStringPostalCode,
};
