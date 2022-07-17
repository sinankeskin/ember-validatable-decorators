import { IsISIN } from 'class-validator';

export function vStringISIN(validationOptions) {
  return IsISIN(validationOptions);
}

export { vStringISIN as stringISIN, vStringISIN as validatableStringISIN };
