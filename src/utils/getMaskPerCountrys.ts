import { CountryProps } from 'common/interface/CountryProps';
import { LanguageProps } from 'common/interface/LanguageProps';

export function getMaskPerCoutryes(location: LanguageProps, countrys: CountryProps[], fieldCountry: string, fieldForm: string, defaultMask: string): string {
  const findMask = countrys.find((country) => country.country === location);

  if (findMask) {
    return findMask[fieldCountry].replace(/[a-zA-Z0]/g, '9');
  }

  return defaultMask;
}
