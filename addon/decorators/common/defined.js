import { IsDefined } from 'class-validator';

export function vDefined(validationOptions) {
  return IsDefined(validationOptions);
}

export { vDefined as defined, vDefined as validatableDefined };
