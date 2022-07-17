import { IsUppercase } from 'class-validator';

export function vStringUppercase(validationOptions) {
  return IsUppercase(validationOptions);
}

export {
  vStringUppercase as stringUppercase,
  vStringUppercase as validatableStringUppercase,
};
