import { IsHalfWidth } from 'class-validator';

export function vStringHalfWidth(...args) {
  return IsHalfWidth(...args);
}

export {
  vStringHalfWidth as stringHalfWidth,
  vStringHalfWidth as validatableStringHalfWidth,
};
