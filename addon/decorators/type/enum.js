import { IsEnum } from 'class-validator';

export function vTypeEnum(entity, validationOptions) {
  return IsEnum(entity, validationOptions);
}

export { vTypeEnum as typeEnum, vTypeEnum as validatableTypeEnum };
