import { CitiesProps } from 'common/interface/CitiesProps';
import { ResponseProps } from 'common/interface/ResponseProps';
import { api } from 'services/api';
import { LIST_CITIES } from 'services/routes';

export async function findCities(limit: number) {
  try {
    const { data } = await api.get(`${LIST_CITIES}?limit=${limit}&offset=0`) as {
        data: ResponseProps<CitiesProps[]>;
    };

    if (!data.ok) {
      throw new Error(data.mensagem ?? 'Ocorreu um erro de comunicação');
    }

    return data.obj;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
