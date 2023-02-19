import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '.';

export async function registerUserFirebase(email: string, password: string) {
  const isUser = await createUserWithEmailAndPassword(auth, email, password);
  return isUser;
}
