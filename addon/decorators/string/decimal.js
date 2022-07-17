import { IsDecimal } from 'class-validator';

export function vStringDecimal(...args) {
  return IsDecimal(...args);
}

export {
  vStringDecimal as decimal,
  vStringDecimal as stringDecimal,
  vStringDecimal as validatableStringDecimal,
};
