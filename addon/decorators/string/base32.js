import { IsBase32 } from 'class-validator';

export function vStringBase32(...args) {
  return IsBase32(...args);
}

export {
  vStringBase32 as stringBase32,
  vStringBase32 as validatableStringBase32,
};
