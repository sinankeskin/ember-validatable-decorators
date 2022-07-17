import { Min } from 'class-validator';

export function vNumberMin(value, validationOptions) {
  return Min(value, validationOptions);
}

export { vNumberMin as numberMin, vNumberMin as validatableNumberMin };
