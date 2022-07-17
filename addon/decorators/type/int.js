import { IsInt } from 'class-validator';

export function vTypeInt(validationOptions) {
  return IsInt(validationOptions);
}

export { vTypeInt as typeInt, vTypeInt as validatableTypeInt };
