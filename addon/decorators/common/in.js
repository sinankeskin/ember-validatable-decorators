import { IsIn } from 'class-validator';

export function vIn(...args) {
  return IsIn(...args);
}

export { vIn as in, vIn as validatableIn };
