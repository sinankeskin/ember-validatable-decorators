import { NotContains } from 'class-validator';

export function vStringNotContains(...args) {
  return NotContains(...args);
}

export {
  vStringNotContains as notContains,
  vStringNotContains as stringNotContains,
  vStringNotContains as validatableStringNotContains,
};
