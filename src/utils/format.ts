export function formatPhone(phone: string) {
  const isPhoneFormatted = phone.replaceAll(' ', '').replaceAll('-', '').replaceAll('(', '').replaceAll(')', '');

  return isPhoneFormatted;
}
