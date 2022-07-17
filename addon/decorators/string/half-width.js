import { IsHalfWidth } from 'class-validator';

export function vStringHalfWidth(validationOptions) {
  return IsHalfWidth(validationOptions);
}

export {
  vStringHalfWidth as stringHalfWidth,
  vStringHalfWidth as validatableStringHalfWidth,
};
