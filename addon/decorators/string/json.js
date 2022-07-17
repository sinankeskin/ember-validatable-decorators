import { IsJSON } from 'class-validator';

export function vStringJSON(validationOptions) {
  return IsJSON(validationOptions);
}

export { vStringJSON as stringJSON, vStringJSON as validatableStringJSON };
