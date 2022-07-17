import { MinLength } from 'class-validator';

export function vStringMinLength(min, validationOptions) {
  return MinLength(min, validationOptions);
}

export {
  vStringMinLength as stringMinLength,
  vStringMinLength as validatableStringMinLength,
};
