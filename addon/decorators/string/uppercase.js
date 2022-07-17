import { IsUppercase } from 'class-validator';

export function vStringUppercase(...args) {
  return IsUppercase(...args);
}

export {
  vStringUppercase as uppercase,
  vStringUppercase as stringUppercase,
  vStringUppercase as validatableStringUppercase,
};
