import { IsMACAddress } from 'class-validator';

export function vStringMACAddress(...args) {
  return IsMACAddress(...args);
}

export {
  vStringMACAddress as macAddress,
  vStringMACAddress as stringMACAddress,
  vStringMACAddress as validatableStringMACAddress,
};
