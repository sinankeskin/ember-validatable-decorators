import { IsUrl } from 'class-validator';

export function vStringURL(options, validationOptions) {
  return IsUrl(options, validationOptions);
}

export { vStringURL as stringURL, vStringURL as validatableStringURL };
