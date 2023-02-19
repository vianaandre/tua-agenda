import { codeErrorsFirabase } from 'services/firebase/codeErrorFirebase';
import { sendPasswordResetEmailFirebase } from 'services/firebase/sendPasswordResetEmailFirebase';

export async function forgotPassword(email: string) {
  try {
    if (email) {
      await sendPasswordResetEmailFirebase(email);

      return true;
    }
    throw new Error('Email é obrigatório para recuperação de senha.');
  } catch (err: any) {
    throw new Error(codeErrorsFirabase(err));
  }
}
