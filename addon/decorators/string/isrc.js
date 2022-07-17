import { IsISRC } from 'class-validator';

export function vStringISRC(...args) {
  return IsISRC(...args);
}

export {
  vStringISRC as isrc,
  vStringISRC as stringISRC,
  vStringISRC as validatableStringISRC,
};
