import { IsIP } from 'class-validator';

export function vStringIP(version, validationOptions) {
  return IsIP(version, validationOptions);
}

export { vStringIP as stringIP, vStringIP as validatableStringIP };
