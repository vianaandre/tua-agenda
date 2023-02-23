import { api } from 'services/api';
import { GET_COMPANY } from 'services/routes';

export async function findByCompany(company: string) {
  try {
    const { data } = await api.get(`${GET_COMPANY}/${company}`, {
      timeout: 30000,
    });

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}
