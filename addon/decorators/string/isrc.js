import { IsISRC } from 'class-validator';

export function vStringISRC(validationOptions) {
  return IsISRC(validationOptions);
}

export { vStringISRC as stringISRC, vStringISRC as validatableStringISRC };
