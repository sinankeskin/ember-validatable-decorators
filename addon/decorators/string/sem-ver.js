import { IsSemVer } from 'class-validator';

export function vStringSemVer(...args) {
  return IsSemVer(...args);
}

export {
  vStringSemVer as stringSemVer,
  vStringSemVer as validatableStringSemVer,
};
