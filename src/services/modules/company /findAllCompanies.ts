import { CompanyAlternativeProps } from 'common/interface/CompanyAlternativeProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { FIND_ALL_COMPANIES } from 'services/routes';

export async function findAllCompanies(lat?: number, long?: number, distanciaKm?: number, limit?: number) {
  try {
    const { data } = await api.post(`${FIND_ALL_COMPANIES}`, {
      tipoConsulta: 'TODAS',
      latitude: lat ?? -28.282861399834463,
      longitude: long ?? -52.36714396440401,
      distanciaKm: distanciaKm ?? 200.0,
      offset: 0,
      limit: limit ?? 50,
    }) as { data: ResponseProps<CompanyAlternativeProps[]> };

    if (!data.ok) {
      throw new Error(data.mensagem);
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
