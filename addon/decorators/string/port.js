import { IsPort } from 'class-validator';

export function vStringPort(...args) {
  return IsPort(...args);
}

export { vStringPort as stringPort, vStringPort as validatableStringPort };
