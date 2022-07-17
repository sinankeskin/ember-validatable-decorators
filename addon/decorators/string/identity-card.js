import { IsIdentityCard } from 'class-validator';

export function vStringIdentityCard(...args) {
  return IsIdentityCard(...args);
}

export {
  vStringIdentityCard as identityCard,
  vStringIdentityCard as stringIdentityCard,
  vStringIdentityCard as validatableStringIdentityCard,
};
