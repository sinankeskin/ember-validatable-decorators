import { IsBooleanString } from 'class-validator';

export function vStringBoolean(validationOptions) {
  return IsBooleanString(validationOptions);
}

export {
  vStringBoolean as stringBoolean,
  vStringBoolean as validatableStringBoolean,
};
