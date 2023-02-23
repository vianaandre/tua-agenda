import React from 'react';
import type { GetStaticPropsContext, NextPage } from 'next';

import { findByCompany } from 'services/modules/company ';
import { ResponseProps } from 'common/interface/ResponseProps';
import { CompanyProps } from 'common/interface/CompanyProps';
import { Company } from 'components/Company';
import { CompanyProvider } from 'common/context/CompanyContext';

const CompanyPage: NextPage<{ company: CompanyProps, ok: boolean }> = ({ company, ok }) => {
  if (!ok) return null;

  return (
    <CompanyProvider>
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
