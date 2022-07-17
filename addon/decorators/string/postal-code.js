import { IsPostalCode } from 'class-validator';

export function vStringPostalCode(...args) {
  return IsPostalCode(...args);
}

export {
  vStringPostalCode as postalCode,
  vStringPostalCode as stringPostalCode,
  vStringPostalCode as validatableStringPostalCode,
};
