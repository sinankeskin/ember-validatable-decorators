import { ArrayNotContains } from 'class-validator';

export function vArrayNotContains(...args) {
  return ArrayNotContains(...args);
}

export {
  vArrayNotContains as arrayNotContains,
  vArrayNotContains as validatableArrayNotContains,
};
