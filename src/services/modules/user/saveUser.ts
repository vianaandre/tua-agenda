import { User } from 'firebase/auth';
import { setCookie, deleteCookie } from 'cookies-next';

import { ResponseProps } from 'common/interface/ResponseProps';
import { UserProps } from 'common/interface/UserProps';
import { findUser } from './findUser';
import { createUser } from './createUser';

export async function saveUser(user: User, tokenId: string, methodLogin?: string, tokenWhypwd?: string, keepConnect?: boolean) {
  try {
    const isUser = await findUser(user.uid, tokenId, tokenWhypwd) as ResponseProps<UserProps>;

    if (!isUser.ok) {
      throw new Error('Ocorreu um erro de comunicação.');
    }

    if (isUser.obj && isUser.obj.id) {
      deleteCookie('@Auth:id');
      deleteCookie('@Auth:token');
      if (keepConnect) {
        setCookie('@Auth:id', isUser.obj.id);
        setCookie('@Auth:token', tokenId);
      }

      return isUser;
    }
    if (!isUser.obj) {
      const isCreatedUser = await createUser({
        email: user.email,
        nome: user.displayName,
        imageUrl: user.photoURL,
        telefone: user.phoneNumber,
        metodoLogin: methodLogin,
        id: user.uid,
      }, user, tokenId) as ResponseProps<UserProps>;

      deleteCookie('@Auth:id');
      deleteCookie('@Auth:token');

      if (isCreatedUser.obj && isCreatedUser.obj.id && keepConnect) {
        setCookie('@Auth:id', isCreatedUser.obj.id);
        setCookie('@Auth:token', tokenId);
      }

      return isCreatedUser;
    }
  } catch (err: any) {
    throw new Error(err);
  }
}
