import { Contains } from 'class-validator';

export function vStringContains(seed, validationOptions) {
  return Contains(seed, validationOptions);
}

export {
  vStringContains as stringContains,
  vStringContains as validatableStringContains,
};
