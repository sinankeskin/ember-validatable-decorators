import { IsAlpha } from 'class-validator';

export function vStringAlpha(...args) {
  return IsAlpha(...args);
}

export {
  vStringAlpha as alpha,
  vStringAlpha as stringAlpha,
  vStringAlpha as validatableStringAlpha,
};
