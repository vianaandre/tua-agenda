import { User } from 'firebase/auth';

import { api } from 'services/api';
import { GET_USER } from 'services/routes';

export async function findUser(id: string, firebaseUser: User) {
  try {
    const { data } = await api.get(`${GET_USER}${id}`, {
      timeout: 10000,
      headers: {
        'token-id': await firebaseUser.getIdToken(),
        'auth-uid': firebaseUser.uid,
      },
    });

    return data;
  } catch (err) {
    return new Error('Ocorreu um erro de comunicação.');
  }
}
