import { getCookie } from 'cookies-next';

import { UserProps } from 'common/interface/UserProps';
import { api } from 'services/api';
import { UPDATE_USER } from 'services/routes';

export async function updateUser(user: UserProps) {
  try {
    const tokenId = getCookie('@Auth:token');

    const { data } = await api.patch(`${UPDATE_USER}/${user.id}`, user, {
      timeout: 1000,
      headers: {
        'token-id': tokenId,
        'auth-uid': user.id,
      },
    });

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
