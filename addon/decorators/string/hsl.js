import { IsHSL } from 'class-validator';

export function vStringHSL(...args) {
  return IsHSL(...args);
}

export {
  vStringHSL as hsl,
  vStringHSL as stringHSL,
  vStringHSL as validatableStringHSL,
};
