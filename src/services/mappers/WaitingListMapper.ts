import { DateProps, FormWaitingListProps, RequestWaitingListProps } from 'common/interface/WaitingListProps';

class WaitingListMapper {
  toPresistence(waitingListDomain: FormWaitingListProps): RequestWaitingListProps {
    const isDates = waitingListDomain.date.map((date) => {
      return {
        data: `${date.date.split('/').reverse().join('-')} 00:00:00`,
        dataStr: date.date,
        hora: date.hour,
        qualquerHora: date.anyTime,
        invalido: false,
        msgData: date.date,
        msgHora: date.hour,
      } as DateProps;
    });

    return {
      datas: isDates,
      itens: waitingListDomain.services?.map((service) => ({
        idProduto: service,
      })),
      observacao: waitingListDomain.observation ?? '',
      idEmpresa: waitingListDomain.companyId,
      idFuncionario: waitingListDomain.employeeId,
    };
  }
}

export default new WaitingListMapper();
