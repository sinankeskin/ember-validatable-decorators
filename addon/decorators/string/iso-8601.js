import { IsISO8601 } from 'class-validator';

export function vStringISO8601(...args) {
  return IsISO8601(...args);
}

export {
  vStringISO8601 as iso8601,
  vStringISO8601 as stringISO8601,
  vStringISO8601 as validatableStringISO8601,
};
