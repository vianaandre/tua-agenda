import { getCookie } from 'cookies-next';

import { PhotoProps } from 'common/interface/PhotoProps';
import { api } from 'services/api';
import { UPLOAD_PHOTO } from 'services/routes';

export async function uploadPhoto(file: PhotoProps, idUser: string) {
  try {
    const tokenId = getCookie('@Auth:token');

    const { data } = await api.post(`${UPLOAD_PHOTO}/${idUser}/image`, file, {
      timeout: 60000,
      headers: {
        'token-id': tokenId,
        'auth-uid': idUser,
      },
    });

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
