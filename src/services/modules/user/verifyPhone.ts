import { apiAlternative } from 'services/api';
import { SEND_SMS_CODE } from 'services/routes';

export async function verifyPhone(phone: string, code: string, language: string) {
  try {
    const { data } = await apiAlternative.get(`${SEND_SMS_CODE}?countryCode=${code}&phoneNumber=${phone}`, {
      timeout: 30000,
      headers: {
        language,
      },
    });

    return data;
  } catch (err: any) {
    return new Error(err);
  }
}
