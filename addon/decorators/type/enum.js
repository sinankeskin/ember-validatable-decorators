import { IsEnum } from 'class-validator';

export function vTypeEnum(...args) {
  return IsEnum(...args);
}

export { vTypeEnum as typeEnum, vTypeEnum as validatableTypeEnum };
