import { IsHexColor } from 'class-validator';

export function vStringHexColor(validationOptions) {
  return IsHexColor(validationOptions);
}

export {
  vStringHexColor as stringHexColor,
  vStringHexColor as validatableStringHexColor,
};
