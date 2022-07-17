import { IsISO8601 } from 'class-validator';

export function vStringISO8601(options, validationOptions) {
  return IsISO8601(options, validationOptions);
}

export {
  vStringISO8601 as stringISO8601,
  vStringISO8601 as validatableStringISO8601,
};
