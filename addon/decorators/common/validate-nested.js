import { ValidateNested } from 'class-validator';

export function vValidateNested(validationOptions) {
  return ValidateNested(validationOptions);
}

export {
  vValidateNested as validateNested,
  vValidateNested as validatableValidateNested,
};
