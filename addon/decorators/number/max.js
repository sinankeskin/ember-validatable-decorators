import { Max } from 'class-validator';

export function vNumberMax(value, validationOptions) {
  return Max(value, validationOptions);
}

export { vNumberMax as numberMax, vNumberMax as validatableNumberMax };
