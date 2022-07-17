import { IsBooleanString } from 'class-validator';

export function vStringBoolean(...args) {
  return IsBooleanString(...args);
}

export {
  vStringBoolean as stringBoolean,
  vStringBoolean as validatableStringBoolean,
};
