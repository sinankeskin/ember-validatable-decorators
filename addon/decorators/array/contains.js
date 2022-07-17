import { ArrayContains } from 'class-validator';

export function vArrayContains(...args) {
  return ArrayContains(...args);
}

export {
  vArrayContains as arrayContains,
  vArrayContains as validatableArrayContains,
};
