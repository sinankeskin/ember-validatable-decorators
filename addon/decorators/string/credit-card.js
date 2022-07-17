import { IsCreditCard } from 'class-validator';

export function vStringCreditCard(validationOptions) {
  return IsCreditCard(validationOptions);
}

export {
  vStringCreditCard as stringCreditCard,
  vStringCreditCard as validatableStringCreditCard,
};
