import { FormWaitingListProps } from 'common/interface/FormWaitingListProps';
import { api } from 'services/api';
import { SAVE_WAITING_LIST } from 'services/routes';
import { saveUser } from 'services/modules/user';
import { UserProps } from 'common/interface/UserProps';
import { saveServerClient } from './saveServerClient';

// dataStr: agendamento.dia ? agendamento.dia.format('DD/MM/YYYY') : '',
// data: '', //data e hora formatado.
// hora: '',
// qualquerHora: true,
// invalido: false,g
// msgData: '',
// msgHora: ''

// observacao: '',

// idFuncionario: null,
//         idEmpresa: null,
//         idCliente: null

export async function saveWaitingList(waitingListData: FormWaitingListProps, companyId: number, tokenCapTcha: string) {
  try {
    const isUser = await saveServerClient(waitingListData.user, companyId, tokenCapTcha) as UserProps;

    if (isUser) {
      const { data } = await api.post(
        `${SAVE_WAITING_LIST}${companyId}`,
        waitingListData,
        {
          timeout: 30000,
          headers: {
            captchatoken: tokenCapTcha,
          },
        },
      );
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}
