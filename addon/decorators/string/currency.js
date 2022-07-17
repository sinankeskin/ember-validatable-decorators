import { IsCurrency } from 'class-validator';

export function vStringCurrency(options, validationOptions) {
  return IsCurrency(options, validationOptions);
}

export {
  vStringCurrency as stringCurrency,
  vStringCurrency as validatableStringCurrency,
};
