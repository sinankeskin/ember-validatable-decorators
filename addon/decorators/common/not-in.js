import { IsNotIn } from 'class-validator';

export function vNotIn(values, validationOptions) {
  return IsNotIn(values, validationOptions);
}

export { vNotIn as notIn, vNotIn as validatableNotIn };
