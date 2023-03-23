import { RequestUserProps, UserProps } from 'common/interface/UserProps';

class UserMappers {
  toPresistence(user: UserProps): RequestUserProps {
    let isDateFormatted = user.dtNascimento;

    if (user.dtNascimento) {
      isDateFormatted = user.dtNascimento.split('/').reverse().join('-');
    }

    return {
      id: user.id ?? '',
      imageUrl: user.imageUrl ?? '',
      bairro: user.rua ?? '',
      cep: user.cep ?? '',
      cidade: user.cidade ?? '',
      codPais: user.country ?? '',
      complemento: user.complemento ?? '',
      cpf: user.cpf ?? '',
      dtNascimento: isDateFormatted ?? '',
      email: user.email ?? '',
      estado: user.estado ?? '',
      nome: user.nome ?? '',
      numero: user.numero ?? '',
      pais: user.pais ?? '',
      rua: user.rua ?? '',
      telefone: user.phone ?? '',
      informouEndereco: false,
    };
  }
}

export default new UserMappers();
