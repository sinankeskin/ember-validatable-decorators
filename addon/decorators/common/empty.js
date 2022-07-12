import { IsEmpty } from 'class-validator';

export function vEmpty(validationOptions) {
  return IsEmpty(validationOptions);
}

export { vEmpty as empty, vEmpty as validatableEmpty };
