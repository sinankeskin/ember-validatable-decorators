import { IsMACAddress } from 'class-validator';

export function vStringMACAddress(options, validationOptions) {
  return IsMACAddress(options, validationOptions);
}

export {
  vStringMACAddress as stringMACAddress,
  vStringMACAddress as validatableStringMACAddress,
};
