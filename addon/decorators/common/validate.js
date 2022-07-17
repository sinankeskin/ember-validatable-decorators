import { Validate } from 'class-validator';

export function vValidate(...args) {
  return Validate(...args);
}

export { vValidate as validate, vValidate as validatableValidate };
