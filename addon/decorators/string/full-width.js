import { IsFullWidth } from 'class-validator';

export function vStringFullWidth(validationOptions) {
  return IsFullWidth(validationOptions);
}

export {
  vStringFullWidth as stringFullWidth,
  vStringFullWidth as validatableStringFullWidth,
};
