import { IsIdentityCard } from 'class-validator';

export function vStringIdentityCard(locale, validationOptions) {
  return IsIdentityCard(locale, validationOptions);
}

export {
  vStringIdentityCard as stringIdentityCard,
  vStringIdentityCard as validatableStringIdentityCard,
};
