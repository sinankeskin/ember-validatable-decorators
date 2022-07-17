import { IsUrl } from 'class-validator';

export function vStringURL(...args) {
  return IsUrl(...args);
}

export { vStringURL as stringURL, vStringURL as validatableStringURL };
