import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '.';

export async function sendPasswordResetEmailFirebase(email: string) {
  const success = await sendPasswordResetEmail(auth, email);

  return success;
}
