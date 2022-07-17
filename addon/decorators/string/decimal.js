import { IsDecimal } from 'class-validator';

export function vStringDecimal(options, validationOptions) {
  return IsDecimal(options, validationOptions);
}

export {
  vStringDecimal as stringDecimal,
  vStringDecimal as validatableStringDecimal,
};
