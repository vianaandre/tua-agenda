import { RefreshTokenProps } from 'common/interface/RefreshTokenProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { User } from 'firebase/auth';
import { apiAlternative } from 'services/api';
import { VALIDATOR_CODE } from 'services/routes';
import { refreshToken } from './refreshToken';
import { saveLocalStorage } from './saveLocalStorage';
import { saveUser } from './saveUser';

export async function validatorCode(phone: string, countryCode: string, code: string, language: string) {
  try {
    const { data } = await apiAlternative.post(VALIDATOR_CODE, {
      countryCode,
      phoneNumber: phone,
      code,
    }, {
      timeout: 10000,
      headers: {
        language,
      },
    }) as { data: ResponseProps<RefreshTokenProps> };

    // refresh token
    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    if (data.obj) {
      const result = await refreshToken(data.obj, language) as UserProps;

      const isClient = {
        uid: result.id,
        phoneNumber: phone,
      } as User;

      const user = await saveUser(isClient, result['auth-uid']!, result.provider, result.token_whypwd) as ResponseProps<UserProps>;

      await saveLocalStorage<RefreshTokenProps>({
        ...data.obj,
        expires: new Date(data.obj.expiresTimestamp),
      }, 'whypwd');

      return user.obj;
    }

    throw new Error('Ocorreu um erro de comunicação.');
  } catch (err: any) {
    throw new Error(err);
  }
}
