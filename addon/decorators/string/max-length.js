import { MaxLength } from 'class-validator';

export function vStringMaxLength(max, validationOptions) {
  return MaxLength(max, validationOptions);
}

export {
  vStringMaxLength as stringMaxLength,
  vStringMaxLength as validatableStringMaxLength,
};
