import { IsLowercase } from 'class-validator';

export function vStringLowercase(validationOptions) {
  return IsLowercase(validationOptions);
}

export {
  vStringLowercase as stringLowercase,
  vStringLowercase as validatableStringLowercase,
};
