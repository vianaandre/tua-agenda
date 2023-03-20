import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { api } from 'services/api';
import { SAVE_SERVER_CLIENT } from 'services/routes';

export async function saveServerClient(user: UserProps, companyId: number, tokenCapTcha: string) {
  try {
    const { data } = await api.post(`${SAVE_SERVER_CLIENT}${companyId}`, user, {
      timeout: 30000,
      headers: {
        captchatoken: tokenCapTcha,
      },
    }) as { data: ResponseProps<UserProps> };

    if (!data.ok) {
      throw new Error('Ocorreu um erro de comunicação.');
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
