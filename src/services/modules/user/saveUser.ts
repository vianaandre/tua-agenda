import { User } from 'firebase/auth';

import { findUser } from './findUser';
import { createUser } from './createUser';

export async function saveUser(user: User, tokenId: string, methodLogin?: string, tokenWhypwd?: string) {
  try {
    const isUser = await findUser(user.uid, tokenId, tokenWhypwd);

    if (!isUser.ok) {
      throw new Error('Ocorreu um erro de comunicação.');
    }

    if (isUser.obj) {
      return isUser;
    }
    if (!isUser.obj) {
      const result = await createUser({
        email: user.email,
        nome: user.displayName,
        imageUrl: user.photoURL,
        telefone: user.phoneNumber,
        metodoLogin: methodLogin,
        id: user.uid,
      }, user, tokenId);

      return result;
    }
  } catch (err: any) {
    throw new Error(err);
  }
}
