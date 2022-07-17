import { ValidateNested } from 'class-validator';

export function vValidateNested(...args) {
  return ValidateNested(...args);
}

export {
  vValidateNested as validateNested,
  vValidateNested as validatableValidateNested,
};
