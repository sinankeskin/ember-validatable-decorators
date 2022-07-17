import { ValidatePromise } from 'class-validator';

export function vValidatePromise(...args) {
  return ValidatePromise(...args);
}

export {
  vValidatePromise as validatePromise,
  vValidatePromise as validatableValidatePromise,
};
