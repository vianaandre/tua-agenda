import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from 'services/firebase';
import { codeErrorsFirabase } from 'services/firebase/codeErrorFirebase';
import { saveUser } from './saveUser';

export async function loginUser(password: string, email: string, keepConnect?: boolean) {
  try {
    const isUserCredential = await signInWithEmailAndPassword(auth, email, password);

    if (isUserCredential) {
      const authId = await isUserCredential.user.getIdToken();

      const isUser = await saveUser(isUserCredential.user, authId, email, undefined, keepConnect) as ResponseProps<UserProps>;

      if (!isUser.ok) {
        throw new Error(isUser.mensagem);
      }
      if (isUser.obj) {
        return isUser.obj;
      }
    }

    throw new Error('Ocorreu um erro de comunicação.');
  } catch (err: any) {
    throw new Error(codeErrorsFirabase(err));
  }
}
