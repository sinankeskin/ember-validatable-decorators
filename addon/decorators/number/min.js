import { Min } from 'class-validator';

export function vMin(value, validationOptions) {
  return Min(value, validationOptions);
}

export { vMin as min, vMin as validatableMin };
