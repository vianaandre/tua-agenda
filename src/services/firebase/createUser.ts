import { UserProps } from 'common/interface/UserProps';
import { User, UserInfo } from 'firebase/auth';
import { api } from 'services/api';
import { CREATE_USER } from 'services/routes';

export async function createUser(user: UserProps, firebaseUser: User) {
  try {
    const tokenId = await firebaseUser.getIdToken();
    const authUid = firebaseUser.uid;

    const { data } = await api.post(CREATE_USER, user, {
      timeout: 10000,
      headers: {
        'token-id': tokenId,
        'auth-uid': authUid,
      },
    });

    console.log('data', data);
  } catch (err) {
    return new Error('Ocorreu um erro de comunicação.');
  }
}
