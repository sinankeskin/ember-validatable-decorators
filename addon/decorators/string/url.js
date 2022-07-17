import { IsUrl } from 'class-validator';

export function vStringURL(...args) {
  return IsUrl(...args);
}

export {
  vStringURL as url,
  vStringURL as stringURL,
  vStringURL as validatableStringURL,
};
