import { Contains } from 'class-validator';

export function vStringContains(...args) {
  return Contains(...args);
}

export {
  vStringContains as stringContains,
  vStringContains as validatableStringContains,
};
