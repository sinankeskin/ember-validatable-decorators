import { Max } from 'class-validator';

export function vMax(value, validationOptions) {
  return Max(value, validationOptions);
}

export { vMax as max, vMax as validatableMax };
