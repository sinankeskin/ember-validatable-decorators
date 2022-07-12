import { IsNotEmptyObject } from 'class-validator';

export function vObjectNotEmpty(options, validationOptions) {
  return IsNotEmptyObject(options, validationOptions);
}

export {
  vObjectNotEmpty as objectNotEmpty,
  vObjectNotEmpty as validatableObjectNotEmpty,
};
