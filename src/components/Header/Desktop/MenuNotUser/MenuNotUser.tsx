import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Button } from 'components/Button';
import { Translation } from 'components/Translation';
import { ContainerMenuNotUser } from './styles';

export const MenuNotUser: React.FC = () => {
  return (
    <ContainerMenuNotUser>
      <li>
        <Translation variant="primary" />
      </li>
      <li>
        <Button.Link
          variant={ButtonVariantProps.SECONDARY}
          text="Para Empresa"
          href="/"
        />
      </li>
      <li className="separator">
        <Button.Link
          variant={ButtonVariantProps.OUTLINE}
          text="Entrar"
          href="/login"
        />
      </li>
      <li>
        <Button.Link
          variant={ButtonVariantProps.PRIMARY}
          text="Cadastrar"
          href="/register"
        />
      </li>
    </ContainerMenuNotUser>
  );
};
