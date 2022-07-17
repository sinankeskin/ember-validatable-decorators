import { IsIdentityCard } from 'class-validator';

export function vStringIdentityCard(...args) {
  return IsIdentityCard(...args);
}

export {
  vStringIdentityCard as stringIdentityCard,
  vStringIdentityCard as validatableStringIdentityCard,
};
