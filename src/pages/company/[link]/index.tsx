import React, { useEffect, useState } from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';

import { findByCompany } from 'services/modules/company ';
import { ResponseProps } from 'common/interface/ResponseProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { Company } from 'components/Company';
import { CompanyProvider } from 'common/context/CompanyContext';
import { Loading } from 'components/Loading';

const CompanyPage: NextPage<{ company: CompanyProps, ok: boolean }> = ({ company, ok }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!ok) return null;

  return (
    <CompanyProvider>
      <Loading open={isLoading} />
      <Company {...company} />
    </CompanyProvider>
  );
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const { link } = context.params as { link: string };

  const result = await findByCompany(link) as ResponseProps<CompanyProps>;

  return {
    props: {
      company: result.obj,
      ok: result.ok,
    },
  };
}

export default CompanyPage;
