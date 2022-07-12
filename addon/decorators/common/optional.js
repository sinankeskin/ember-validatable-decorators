import { IsOptional } from 'class-validator';

export function vOptional(validationOptions) {
  return IsOptional(validationOptions);
}

export { vOptional as optional, vOptional as validatableOptional };
