import { IsDefined } from 'class-validator';

export function vDefined(...args) {
  return IsDefined(...args);
}

export { vDefined as defined, vDefined as validatableDefined };
