import useSWR from 'swr';
import {
  api, baseURL,
} from 'services/api';
import { getCookie } from 'cookies-next';

export function usePaginationAppointments<Data = any>(path: string, userId?: string) {
  const url = `${baseURL}${path}`;
  const isTokenWhypwd = getCookie('@Auth:token');

  const { data, error, isLoading } = useSWR(url, async () => {
    const { data } = await api.get(path, {
      timeout: 30000,
      headers: {
        'token-id': isTokenWhypwd,
        'auth-uid': userId,
      },
    }) as { data: Data };

    return data;
  }, {
    errorRetryCount: 3,
    shouldRetryOnError: true,
    errorRetryInterval: 300,
  });

  return { data, error, loadingSWR: isLoading };
}
