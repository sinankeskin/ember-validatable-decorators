import { IsMobilePhone } from 'class-validator';

export function vStringMobilePhone(locale, options, validationOptions) {
  return IsMobilePhone(locale, options, validationOptions);
}

export {
  vStringMobilePhone as stringMobilePhone,
  vStringMobilePhone as validatableStringMobilePhone,
};
