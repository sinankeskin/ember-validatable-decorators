import { IsLocale } from 'class-validator';

export function vStringLocale(validationOptions) {
  return IsLocale(validationOptions);
}

export {
  vStringLocale as stringLocale,
  vStringLocale as validatableStringLocale,
};
