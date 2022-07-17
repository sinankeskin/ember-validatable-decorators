import { IsFullWidth } from 'class-validator';

export function vStringFullWidth(...args) {
  return IsFullWidth(...args);
}

export {
  vStringFullWidth as stringFullWidth,
  vStringFullWidth as validatableStringFullWidth,
};
