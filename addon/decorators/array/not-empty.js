import { ArrayNotEmpty } from 'class-validator';

export function vArrayNotEmpty(validationOptions) {
  return ArrayNotEmpty(validationOptions);
}

export {
  vArrayNotEmpty as arrayNotEmpty,
  vArrayNotEmpty as validatableArrayNotEmpty,
};
