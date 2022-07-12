import { Validate } from 'class-validator';

export function vValidate(constraintClass, validationOptions) {
  return Validate(constraintClass, validationOptions);
}

export { vValidate as validate, vValidate as validatableValidate };
