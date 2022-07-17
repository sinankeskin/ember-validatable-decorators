import { MaxLength } from 'class-validator';

export function vStringMaxLength(...args) {
  return MaxLength(...args);
}

export {
  vStringMaxLength as maxLength,
  vStringMaxLength as stringMaxLength,
  vStringMaxLength as validatableStringMaxLength,
};
