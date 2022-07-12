import { IsInstance } from 'class-validator';

export function vInstance(targetType, validationOptions) {
  return IsInstance(targetType, validationOptions);
}

export { vInstance as instance, vInstance as validatableInstance };
