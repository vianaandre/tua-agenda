import { useNotifications } from 'common/hooks/useNotifications';
import { useCallback, useMemo, useState } from 'react';
import { findByIdCompany } from 'services/modules/company ';
import { useToast } from 'common/hooks/useToast';
import { CompanyAlternativeProps } from 'common/interface/CompanyAlternativeProps';

export function useTableNotifications() {
  const { notifications, loading } = useNotifications();
  const { onToast } = useToast();
  const [isCompanies, setIsCompanies] = useState<CompanyAlternativeProps[]>();
  const [isCompanySelect, setIsCompanySelect] = useState<CompanyAlternativeProps>();

  const filtered = useMemo(() => {
    return notifications;
  }, [notifications]);

  const handleLoadCompany = useCallback(async (companyId: string) => {
    try {
      const companyExist = isCompanies?.find((company) => String(company.id) === companyId);

      if (companyExist) {
        setIsCompanySelect(companyExist);
      } else {
        const company = await findByIdCompany(companyId);

        if (company) {
          setIsCompanies((current) => [...(current ?? []), company]);
          setIsCompanySelect(company);
        } else {
          onToast({
            message: 'Empresa não foi achada.',
            type: 'info',
          });
        }
      }
    } catch (err: any) {
      onToast({
        message: err.message ?? 'Ocorreu um erro de comunicação.',
        type: 'error',
      });
    }
  }, [onToast, isCompanies]);

  return {
    notifications: filtered,
    companySelect: isCompanySelect,
    loading,
    handleLoadCompany,
  };
}
