import { IsNotEmpty } from 'class-validator';

export function vNotEmpty(validationOptions) {
  return IsNotEmpty(validationOptions);
}

export { vNotEmpty as notEmpty, vNotEmpty as validatableNotEmpty };
