import { IsRgbColor } from 'class-validator';

export function vStringRGBColor(...args) {
  return IsRgbColor(...args);
}

export {
  vStringRGBColor as rgbColor,
  vStringRGBColor as stringRGBColor,
  vStringRGBColor as validatableStringRGBColor,
};
