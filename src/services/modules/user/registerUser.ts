import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { registerUserFirebase } from 'services/firebase/registerUserFirebase';
import { codeErrorsFirabase } from 'services/firebase/codeErrorFirebase';
import { saveUser } from './saveUser';

export async function registerUser(user: UserProps) {
  try {
    if (user.email && user.senha && user.nome) {
      const isUserCredential = await registerUserFirebase(user.email, user.senha);

      if (isUserCredential) {
        const authId = await isUserCredential.user.getIdToken();
        const isUser = await saveUser({
          ...isUserCredential.user,
          displayName: user.nome,
        }, authId, user.email) as ResponseProps<UserProps>;

        if (isUser.ok && isUser.obj) {
          return isUser.obj;
        }

        if (!isUser.ok) {
          throw new Error(isUser.mensagem);
        }
      }
    } else {
      throw new Error('Nome, e-mail e senha são obrigatórios.');
    }
  } catch (err: any) {
    throw new Error(codeErrorsFirabase(err));
  }
}
