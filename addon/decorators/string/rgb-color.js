import { IsRgbColor } from 'class-validator';

export function vStringRGBColor(includePercentValues, validationOptions) {
  return IsRgbColor(includePercentValues, validationOptions);
}

export {
  vStringRGBColor as stringRGBColor,
  vStringRGBColor as validatableStringRGBColor,
};
