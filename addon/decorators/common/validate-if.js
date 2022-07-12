import { ValidateIf } from 'class-validator';

export function vValidateIf(condition, validationOptions) {
  return ValidateIf(condition, validationOptions);
}

export { vValidateIf as validateIf, vValidateIf as validatableValidateIf };
