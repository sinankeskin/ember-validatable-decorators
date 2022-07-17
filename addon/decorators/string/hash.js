import { IsHash } from 'class-validator';

export function vStringHash(...args) {
  return IsHash(...args);
}

export {
  vStringHash as hash,
  vStringHash as stringHash,
  vStringHash as validatableStringHash,
};
