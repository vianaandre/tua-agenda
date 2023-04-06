import { PaymentGenerateProps } from 'common/interface/PaymentGenerateProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { GENERATE_PAYMENT } from 'services/routes';

export async function findPayment(scheduleId: string, companyId: string, tokenCapcha: string) {
  try {
    const { data } = await api.get(`${GENERATE_PAYMENT}/${scheduleId}?idEmpresa=${companyId}
    `, {
      timeout: 20000,
      headers: {
        captchatoken: tokenCapcha,
      },
    }) as { data: ResponseProps<PaymentGenerateProps[]> };

    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
