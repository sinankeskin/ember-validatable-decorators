import { IsOptional } from 'class-validator';

export function vOptional(...args) {
  return IsOptional(...args);
}

export { vOptional as optional, vOptional as validatableOptional };
