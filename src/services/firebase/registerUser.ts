import { User } from 'firebase/auth';
import { findUser } from './findUser';

export async function registerUser(user: User) {
  try {
    const userExist = await findUser(user.uid, user);

    console.log('userExist', userExist);
  } catch (err) {
    return err;
  }
}
