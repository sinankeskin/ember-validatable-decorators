import { ValidateIf } from 'class-validator';

export function vValidateIf(...args) {
  return ValidateIf(...args);
}

export { vValidateIf as validateIf, vValidateIf as validatableValidateIf };
