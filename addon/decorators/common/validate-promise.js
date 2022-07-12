import { ValidatePromise } from 'class-validator';

export function vValidatePromise(validationOptions) {
  return ValidatePromise(validationOptions);
}

export {
  vValidatePromise as validatePromise,
  vValidatePromise as validatableValidatePromise,
};
