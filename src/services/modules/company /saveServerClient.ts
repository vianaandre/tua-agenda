import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { api } from 'services/api';
import { SAVE_SERVER_CLIENT } from 'services/routes';
import UserMappers from 'services/mappers/UserMappers';

export async function saveServerClient(user: UserProps, companyId: number, tokenCapTcha: string, userId?: string) {
  try {
    const isUser = UserMappers.toPresistence({
      ...user,
      id: userId,
    });

    const { data } = await api.post(`${SAVE_SERVER_CLIENT}${companyId}`, isUser, {
      timeout: 30000,
      headers: {
        captchatoken: tokenCapTcha,
      },
    }) as { data: ResponseProps<UserProps> };

    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
