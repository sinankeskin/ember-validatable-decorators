import { NotEquals } from 'class-validator';

export function vNotEquals(...args) {
  return NotEquals(...args);
}

export { vNotEquals as notEquals, vNotEquals as validatableNotEquals };
