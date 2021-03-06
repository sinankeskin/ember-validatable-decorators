import { IsFQDN } from 'class-validator';

export function vStringFQDN(...args) {
  return IsFQDN(...args);
}

export {
  vStringFQDN as fqdn,
  vStringFQDN as stringFQDN,
  vStringFQDN as validatableStringFQDN,
};
