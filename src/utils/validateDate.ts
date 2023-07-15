import { LanguageProps } from 'common/interface/LanguageProps';
import { isValid } from 'date-fns';

function validateDatePtBR(date: string) {
  const [day, month, year] = date.split('/');

  if (Number(day) > 31) {
    return false;
  }

  if (Number(month) > 11) {
    return false;
  }

  if (isValid(new Date(Number(year), (Number(month) - 1), Number(day)))) {
    return true;
  }
}

function validateDateEsES(date: string) {
  const [month, day, year] = date.split('/');

  if (Number(day) > 31) {
    return false;
  }

  if (Number(month) > 11) {
    return false;
  }

  if (isValid(new Date(Number(year), (Number(month) - 1), Number(day)))) {
    return true;
  }
}

function validateDateEn(date: string) {
  const [year, month, day] = date.split('/');

  if (Number(day) > 31) {
    return false;
  }

  if (Number(month) > 11) {
    return false;
  }

  if (isValid(new Date(Number(year), (Number(month) - 1), Number(day)))) {
    return true;
  }
}

export function validateDate(date: string, location: LanguageProps) {
  switch (location) {
    case 'BR':
      return validateDatePtBR(date);
    case 'ES':
      return validateDateEsES(date);
    case 'US':
      return validateDateEn(date);
    default:
      return validateDatePtBR(date);
  }
}
