import React, { useCallback, useEffect, useState } from 'react';
import { createContext } from 'use-context-selector';
import { useRouter } from 'next/router';

import { useToast } from 'common/hooks/useToast';
import { findSchedule } from 'services/modules/schedule';
import { useAuth } from 'common/hooks/useAuth';
import { getToken } from 'utils/getToken';
import { ScheduleResponseProps } from 'common/interface/ScheduleResponseProps';

interface DetailsScheduleContextProps {
    schedule?: ScheduleResponseProps;
    loading: boolean;
}

export const DetailsScheduleContext = createContext({} as DetailsScheduleContextProps);

export function DetailsScheduleProvider({ children }: { children: React.ReactNode }) {
  const { onToast } = useToast();
  const { user } = useAuth();
  const { query } = useRouter();
  const { id, companyId } = query as { id: string; companyId: string };

  const [isSchedule, setIsSchedule] = useState<ScheduleResponseProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoadSchedule = useCallback(async () => {
    try {
      const isToken = getToken() as string;
      if (user && user.id && id && isToken && companyId) {
        setIsLoading(true);
        const result = await findSchedule(companyId, id, isToken, user.id);

        setIsSchedule(result?.obj);
        setIsLoading(false);
      }
    } catch (err: any) {
      setIsLoading(false);
      onToast({
        message: err ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, user, id, companyId]);

  useEffect(() => {
    handleLoadSchedule();
  }, [handleLoadSchedule]);

  return (
    <DetailsScheduleContext.Provider value={{ schedule: isSchedule, loading: isLoading }}>
      {children}
    </DetailsScheduleContext.Provider>
  );
}
