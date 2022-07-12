import { ArrayUnique } from 'class-validator';

export function vArrayUnique(identifierOrOptions, validationOptions) {
  return ArrayUnique(identifierOrOptions, validationOptions);
}

export { vArrayUnique as arrayUnique, vArrayUnique as validatableArrayUnique };
