import { NotContains } from 'class-validator';

export function vStringNotContains(seed, validationOptions) {
  return NotContains(seed, validationOptions);
}

export {
  vStringNotContains as stringNotContains,
  vStringNotContains as validatableStringNotContains,
};
