import { Contains } from 'class-validator';

export function vStringContains(...args) {
  return Contains(...args);
}

export {
  vStringContains as contains,
  vStringContains as validatableStringContains,
};
