import { IsJSON } from 'class-validator';

export function vStringJSON(...args) {
  return IsJSON(...args);
}

export {
  vStringJSON as json,
  vStringJSON as stringJSON,
  vStringJSON as validatableStringJSON,
};
