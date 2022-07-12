import { ValidateBy } from 'class-validator';

export function vValidateBy(options, validationOptions) {
  return ValidateBy(options, validationOptions);
}

export { vValidateBy as validateBy, vValidateBy as validatableValidateBy };
