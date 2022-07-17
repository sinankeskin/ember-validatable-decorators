import { IsSemVer } from 'class-validator';

export function vStringSemVer(validationOptions) {
  return IsSemVer(validationOptions);
}

export {
  vStringSemVer as stringSemVer,
  vStringSemVer as validatableStringSemVer,
};
