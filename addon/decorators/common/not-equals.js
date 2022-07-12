import { NotEquals } from 'class-validator';

export function vNotEquals(comparison, validationOptions) {
  return NotEquals(comparison, validationOptions);
}

export { vNotEquals as notEquals, vNotEquals as validatableNotEquals };
