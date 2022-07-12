import { Allow } from 'class-validator';

export function vAllow(validationOptions) {
  return Allow(validationOptions);
}

export { vAllow as allow, vAllow as validatableAllow };
