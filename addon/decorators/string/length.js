import { Length } from 'class-validator';

export function vStringLength(min, max, validationOptions) {
  return Length(min, max, validationOptions);
}

export {
  vStringLength as stringLength,
  vStringLength as validatableStringLength,
};
