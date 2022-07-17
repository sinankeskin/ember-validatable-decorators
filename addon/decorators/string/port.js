import { IsPort } from 'class-validator';

export function vStringPort(validationOptions) {
  return IsPort(validationOptions);
}

export { vStringPort as stringPort, vStringPort as validatableStringPort };
