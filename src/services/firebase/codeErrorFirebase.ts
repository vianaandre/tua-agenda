export function codeErrorsFirabase(e: { code: string, message: string }) {
  const mensagem = e.message;

  switch (e.code) {
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Usuário não encontrado com o e-mail e senha informados.';
      break;
    case 'auth/invalid-email':
      return 'Por favor, informe um e-mail válido.';
      break;
    case 'auth/email-already-in-use':
      return 'O e-mail informado já está em uso.';
      break;
    case 'auth/popup-closed-by-user':
      return mensagem;
      break;
    default:
      return e.message;
  }
}
