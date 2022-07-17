import { IsLocale } from 'class-validator';

export function vStringLocale(...args) {
  return IsLocale(...args);
}

export {
  vStringLocale as stringLocale,
  vStringLocale as validatableStringLocale,
};
