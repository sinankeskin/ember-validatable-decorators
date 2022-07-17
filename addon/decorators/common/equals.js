import { Equals } from 'class-validator';

export function vEquals(...args) {
  return Equals(...args);
}

export { vEquals as equals, vEquals as validatableEquals };
