import { RequestWaitingListProps, FormWaitingListProps } from 'common/interface/WaitingListProps';
import { api } from 'services/api';
import { SAVE_WAITING_LIST } from 'services/routes';
import { UserProps } from 'common/interface/UserProps';
import WaitingListMapper from 'services/mappers/WaitingListMapper';
import { ResponseProps } from 'common/interface/ResponseProps';
import { saveServerClient } from './saveServerClient';

export async function saveWaitingList(waitingListData: FormWaitingListProps, companyId: number, services: string[], user: UserProps, tokenCapTcha: string, employeeId?: string, userId?: string) {
  try {
    const isMockCapTcha = '03AFY_a8VmLHEbojP-CHWyPQBZAindvh1t2T7fluTp0e_0tJAxco5GkV3f28Y7FpKpHYhI_1tdj7RjUg4LAa99WYBFWz7WsVmHxxLUVJoFzyKYOsrNyvNhY_SBwOW9GtqIzH0cRJr_GpzVB5hrU_MjS7DK2eHxtZr4i33GmLuPWF8oogpoNcVpqzU60gxuloVAIBzDBgV5UyoEyIMMzZT_reIFxRgiTC3F6P59DUfe1Lhx9O71faw_NkGDfN20EdsU9i-DlNi2CVMUP1TXBWxIao1-KpQALNZUUkKGEIVLnEa4zjFAfiyDzXe3aSNGCRq7vdbQ0ZOcf7hP6UxwuD9kIe4keYT9sQemmk-DKLpZxNKuFomJxxMTz8MgPh1UBHcolMa4WRIkUbo1pVpjl3FfzgEt2D1Bs15PLWoLsxKI_qQ7jyqv7FaU_QD91Dv82nKQ28ayLIYk4G8bxd2mGwuPXxBO1O25e0ULNSe8VtFKq0z_jrx0HP8YnUtXf4ssF4Em0PLBTtcpgk1oz2Jxyh_qS4_h8hgKQFWBCe6uv--Zg4kbGbuZ-Rrh7VCZ-FtChBvdYlfilnEM3G044TjAvaoARpdArD8urxMiZg';

    const waitingList = WaitingListMapper.toPresistence({
      ...waitingListData,
      companyId,
      services,
      employeeId,
    }) as RequestWaitingListProps;

    const isUser = await saveServerClient(user, companyId, tokenCapTcha, userId) as UserProps;

    if (isUser) {
      const { data } = await api.post(
        `${SAVE_WAITING_LIST}${waitingList.idEmpresa}`,
        {
          ...waitingList,
          idCliente: isUser.id,
        },
        {
          timeout: 30000,
          headers: {
            captchatoken: isMockCapTcha,
          },
        },
      ) as { data: ResponseProps<any> };

      if (!data.ok) {
        throw new Error(data.mensagem ?? 'Ocorreu um erro de comunicação.');
      }
    }
  } catch (err: any) {
    throw new Error(err.message);
  }
}
