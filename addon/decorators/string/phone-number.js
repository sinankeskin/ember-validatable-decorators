import { IsPhoneNumber } from 'class-validator';

export function vStringPhoneNumber(...args) {
  return IsPhoneNumber(...args);
}

export {
  vStringPhoneNumber as stringPhoneNumber,
  vStringPhoneNumber as validatableStringPhoneNumber,
};
