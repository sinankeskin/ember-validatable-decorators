import { IsNegative } from 'class-validator';

export function vNegative(number, validationOptions) {
  return IsNegative(validationOptions);
}

export { vNegative as negative, vNegative as validatableNegative };
