import { IsCurrency } from 'class-validator';

export function vStringCurrency(...args) {
  return IsCurrency(...args);
}

export {
  vStringCurrency as stringCurrency,
  vStringCurrency as validatableStringCurrency,
};
