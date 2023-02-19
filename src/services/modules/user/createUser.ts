import { UserProps } from 'common/interface/UserProps';
import { User } from 'firebase/auth';
import { api } from 'services/api';
import { CREATE_USER } from 'services/routes';

export async function createUser(user: UserProps, firebaseUser: User, tokenId: string) {
  try {
    const isTokenId = tokenId;
    const authUid = firebaseUser.uid;

    const { data } = await api.post(CREATE_USER, user, {
      timeout: 10000,
      headers: {
        'token-id': isTokenId,
        'auth-uid': authUid,
      },
    });

    return data;
  } catch (err) {
    return new Error('Ocorreu um erro de comunicação.');
  }
}
