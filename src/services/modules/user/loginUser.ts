import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'services/firebase';
import { saveUser } from './saveUser';

export async function loginUser(password: string, email: string) {
  try {
    const isUserCredential = await signInWithEmailAndPassword(auth, email, password);

    if (isUserCredential) {
      const authId = await isUserCredential.user.getIdToken();

      const isUser = await saveUser(isUserCredential.user, authId, email) as ResponseProps<UserProps>;

      if (!isUser.ok) {
        throw new Error(isUser.mensagem);
      }
      if (isUser.obj) {
        return isUser.obj;
      }
    }

    throw new Error('Ocorreu um erro de comunicação.');
  } catch (err: any) {
    throw new Error(err);
  }
}
