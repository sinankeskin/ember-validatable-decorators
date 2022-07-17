import { IsNotIn } from 'class-validator';

export function vNotIn(...args) {
  return IsNotIn(...args);
}

export { vNotIn as notIn, vNotIn as validatableNotIn };
