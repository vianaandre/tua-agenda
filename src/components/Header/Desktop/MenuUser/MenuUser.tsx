import React from 'react';
import Link from 'next/link';

import { Translation } from 'components/Translation';
import { useAuth } from 'common/hooks/useAuth';
import { useIntl } from 'react-intl';
import { ContainerMenuUser } from './styles';
import { Notification } from './Notification';
import { Profile } from './Profile';

export const MenuUser: React.FC = () => {
  const { user } = useAuth();
  const { formatMessage } = useIntl();

  return (
    <ContainerMenuUser>
      <li>
        <Translation variant="white" />
      </li>
      <li>
        <Link href="/appointments">
          <a>
            <p className="normal color_grey_800">
              {formatMessage({
                id: 'MENU_OPTION_ONE',
              })}
            </p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Anamneses">
          <a>
            <p className="normal color_grey_800">
              {formatMessage({
                id: 'MENU_OPTION_TWO',
              })}
            </p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/notifications">
          <a>
            <p className="normal color_grey_800">
              {formatMessage({
                id: 'MENU_OPTION_THREE',
              })}
            </p>
          </a>
        </Link>
      </li>
      <li className="notification">
        <div>
          <Notification />
        </div>
      </li>
      {user && (
        <li>
          <Profile {...user} />
        </li>
      )}
    </ContainerMenuUser>
  );
};
