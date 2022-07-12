import { ArrayNotContains } from 'class-validator';

export function vArrayNotContains(values, validationOptions) {
  return ArrayNotContains(values, validationOptions);
}

export {
  vArrayNotContains as arrayNotContains,
  vArrayNotContains as validatableArrayNotContains,
};
