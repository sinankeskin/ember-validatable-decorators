import { Length } from 'class-validator';

export function vStringLength(...args) {
  return Length(...args);
}

export {
  vStringLength as length,
  vStringLength as stringLength,
  vStringLength as validatableStringLength,
};
