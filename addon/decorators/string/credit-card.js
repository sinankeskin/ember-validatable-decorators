import { IsCreditCard } from 'class-validator';

export function vStringCreditCard(...args) {
  return IsCreditCard(...args);
}

export {
  vStringCreditCard as creditCard,
  vStringCreditCard as stringCreditCard,
  vStringCreditCard as validatableStringCreditCard,
};
