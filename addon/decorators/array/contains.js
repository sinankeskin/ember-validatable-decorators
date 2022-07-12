import { ArrayContains } from 'class-validator';

export function vArrayContains(values, validationOptions) {
  return ArrayContains(values, validationOptions);
}

export {
  vArrayContains as arrayContains,
  vArrayContains as validatableArrayContains,
};
