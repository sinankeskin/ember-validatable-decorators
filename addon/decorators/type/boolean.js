import { IsBoolean } from 'class-validator';

export function vTypeBoolean(validationOptions) {
  return IsBoolean(validationOptions);
}

export { vTypeBoolean as typeBoolean, vTypeBoolean as validatableTypeBoolean };
