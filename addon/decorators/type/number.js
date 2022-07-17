import { IsNumber } from 'class-validator';

export function vTypeNumber(options, validationOptions) {
  return IsNumber(options, validationOptions);
}

export { vTypeNumber as typeNumber, vTypeNumber as validatableTypeNumber };
