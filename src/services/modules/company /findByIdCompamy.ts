import { ConfigProps } from 'common/interface/ConfigProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { FIND_COMPANY } from 'services/routes';

export async function findByIdCompany(companyId: string) {
  try {
    const { data } = await api.get(`${FIND_COMPANY}/${companyId}`, {
      timeout: 30000,
    }) as { data: ResponseProps<ConfigProps> };

    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err);
  }
}
