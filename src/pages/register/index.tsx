import React from 'react';
import type { NextPage } from 'next';

import { HomeProps } from 'common/interface/HomeProps';
import { HomeProvider } from 'common/context/HomeContext';
import { LoginAndRegister } from 'components/LoginAndRegister';

const LoginPage: NextPage<HomeProps> = () => {
  return (
    <HomeProvider>
      <LoginAndRegister type="register" />
    </HomeProvider>
  );
};

export default LoginPage;
