import { MinLength } from 'class-validator';

export function vStringMinLength(...args) {
  return MinLength(...args);
}

export {
  vStringMinLength as minLength,
  vStringMinLength as stringMinLength,
  vStringMinLength as validatableStringMinLength,
};
