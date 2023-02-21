export function formatPhone(phone: string) {
  const isPhoneFormatted = phone.replaceAll(' ', '').replaceAll('-', '').replaceAll('(', '').replaceAll(')', '');

  return isPhoneFormatted;
}

export function formatDate(date: string) {
  const isDateFormatted = date.split('-').reverse().join('/');

  return isDateFormatted;
}
