import { IsLowercase } from 'class-validator';

export function vStringLowercase(...args) {
  return IsLowercase(...args);
}

export {
  vStringLowercase as lowercase,
  vStringLowercase as stringLowercase,
  vStringLowercase as validatableStringLowercase,
};
