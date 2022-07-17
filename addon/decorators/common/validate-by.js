import { ValidateBy } from 'class-validator';

export function vValidateBy(...args) {
  return ValidateBy(...args);
}

export { vValidateBy as validateBy, vValidateBy as validatableValidateBy };
