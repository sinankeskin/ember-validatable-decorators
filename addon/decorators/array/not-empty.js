import { ArrayNotEmpty } from 'class-validator';

export function vArrayNotEmpty(...args) {
  return ArrayNotEmpty(...args);
}

export {
  vArrayNotEmpty as arrayNotEmpty,
  vArrayNotEmpty as validatableArrayNotEmpty,
};
