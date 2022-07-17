import { IsFQDN } from 'class-validator';

export function vStringFQDN(options, validationOptions) {
  return IsFQDN(options, validationOptions);
}

export { vStringFQDN as stringFQDN, vStringFQDN as validatableStringFQDN };
