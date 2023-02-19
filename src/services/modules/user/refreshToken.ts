import { RefreshTokenProps } from 'common/interface/RefreshTokenProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { apiAlternative } from 'services/api';
import { TOKEN_REFRESH } from 'services/routes';

export async function refreshToken(refreshToken: RefreshTokenProps, language: string) {
  try {
    const userRefreshToken = {
      id: refreshToken.clientId,
      provider: 'whypwd',
      raw: refreshToken,
      token_whypwd: refreshToken.accessToken,
      'auth-uid': refreshToken.clientId,
    };
    if (refreshToken && refreshToken.expiresTimestamp) {
      const isExpiration = new Date(refreshToken.expiresTimestamp).getTime() < new Date().getTime();

      if (isExpiration) {
        const { data } = await apiAlternative.put(`${TOKEN_REFRESH}?refreshToken=${refreshToken.refreshToken}`, {}, {
          timeout: 10000,
          headers: {
            language,
          },
        }) as { data: ResponseProps<RefreshTokenProps> };

        if (data && data.ok && data.obj) {
          userRefreshToken['auth-uid'] = data.obj.clientId;
          userRefreshToken.id = data.obj.clientId;
          userRefreshToken.token_whypwd = data.obj.accessToken;
          userRefreshToken.raw = data.obj;

          return userRefreshToken;
        }
      }
    }
    return userRefreshToken;
  } catch (err: any) {
    return err;
  }
}
