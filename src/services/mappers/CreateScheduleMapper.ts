import { format } from 'date-fns';

import { EmployeeProps } from 'common/interface/EmployeeProps';
import { HourProps } from 'common/interface/HourProps';
import { SchedulePayloadProps } from 'common/interface/SchedulePayloadProps';
import { UserProps } from 'common/interface/UserProps';

class UserMappers {
  toPresistence(user: UserProps, products: string[], employees: EmployeeProps[], companyId: number, date: Date, hour: HourProps, observation: string): SchedulePayloadProps {
    const isFormatSchedulePayload = {
      cliente: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        codPais: user.codPais,
        telefone: user.telefone1,
        dtNascimento: user.dtNascimento,
        cpf: user.cpf,
        cep: user.cep,
        rua: user.rua,
        numero: user.numero,
        complemento: user.numero,
        bairro: user.bairro,
        cidade: user.cidade,
        estado: user.estado,
        pais: user.pais,
        informouEndereco: !!user.cep,
        imageUrl: user.imageUrl,
      },
      data: format(new Date(date), 'yyyy-MM-dd'),
      hora: hour.hora,
      idEmpresa: companyId,
      idFuncionario: employees[0].id,
      latitude: 0,
      longitude: 0,
      observacaoPublica: observation,
      produtos: products,
    } as SchedulePayloadProps;

    return isFormatSchedulePayload;
  }
}

export default new UserMappers();
