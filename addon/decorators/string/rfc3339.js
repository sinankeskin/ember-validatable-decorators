import { IsRFC3339 } from 'class-validator';

export function vStringRFC3339(validationOptions) {
  return IsRFC3339(validationOptions);
}

export {
  vStringRFC3339 as stringRFC3339,
  vStringRFC3339 as validatableStringRFC3339,
};
