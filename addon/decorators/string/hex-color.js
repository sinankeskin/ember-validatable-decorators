import { IsHexColor } from 'class-validator';

export function vStringHexColor(...args) {
  return IsHexColor(...args);
}

export {
  vStringHexColor as hexColor,
  vStringHexColor as stringHexColor,
  vStringHexColor as validatableStringHexColor,
};
