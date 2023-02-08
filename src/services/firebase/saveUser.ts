import { User, UserInfo } from 'firebase/auth';

import { MethodLoginProps } from 'common/interface/MethodLoginProps';
import { findUser } from './findUser';
import { createUser } from './createUser';

export async function saveUser(user: UserInfo, methodLogin: MethodLoginProps) {
  try {
    const isUser = await findUser(user.uid, user);

    if (!isUser.ok) {
      throw new Error('Ocorreu um erro de comunicação.');
    }

    if (isUser.obj) {
      return isUser;
    }
    if (!isUser.obj) {
    //   const result = await createUser({
    //     email: user.email,
    //     nome: user.displayName,
    //     imageUrl: user.photoURL,
    //     telefone: user.phoneNumber,
    //     metodoLogin: methodLogin,
    //   }, user);
    }
  } catch (err) {
    return err;
  }
}
