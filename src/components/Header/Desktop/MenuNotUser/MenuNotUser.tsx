import React from 'react';

import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { Button } from 'components/Button';
import { Translation } from 'components/Translation';
import { useIntl } from 'react-intl';
import { ContainerMenuNotUser } from './styles';

export const MenuNotUser: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <ContainerMenuNotUser>
      <li>
        <Translation variant="primary" />
      </li>
      <li>
        <Button.Link
          variant={ButtonVariantProps.SECONDARY}
          text={formatMessage({
            id: 'MENU_OPTION_FOUR',
          })}
          href="/"
        />
      </li>
      <li className="separator">
        <Button.Link
          variant={ButtonVariantProps.OUTLINE}
          text={formatMessage({
            id: 'MENU_OPTION_FIVE',
          })}
          href="/login"
        />
      </li>
      <li>
        <Button.Link
          variant={ButtonVariantProps.PRIMARY}
          text={formatMessage({
            id: 'MENU_OPTION_SIX',
          })}
          href="/register"
        />
      </li>
    </ContainerMenuNotUser>
  );
};
