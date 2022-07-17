import { IsMobilePhone } from 'class-validator';

export function vStringMobilePhone(...args) {
  return IsMobilePhone(...args);
}

export {
  vStringMobilePhone as mobilePhone,
  vStringMobilePhone as stringMobilePhone,
  vStringMobilePhone as validatableStringMobilePhone,
};
