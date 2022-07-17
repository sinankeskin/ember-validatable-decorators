import { ArrayUnique } from 'class-validator';

export function vArrayUnique(...args) {
  return ArrayUnique(...args);
}

export { vArrayUnique as arrayUnique, vArrayUnique as validatableArrayUnique };
