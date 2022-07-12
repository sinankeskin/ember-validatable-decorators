import { Equals } from 'class-validator';

export function vEquals(comparison, validationOptions) {
  return Equals(comparison, validationOptions);
}

export { vEquals as equals, vEquals as validatableEquals };
