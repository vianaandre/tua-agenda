import React from 'react';
import Link from 'next/link';

import { Translation } from 'components/Translation';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerMenuUser } from './styles';
import { Notification } from './Notification';
import { Profile } from './Profile';

export const MenuUser: React.FC = () => {
  const { user } = useAuth();

  return (
    <ContainerMenuUser>
      <li>
        <Translation variant="white" />
      </li>
      <li>
        <Link href="/appointments">
          <a>
            <p className="normal color_grey_800">
              Agendamentos
            </p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Anamneses">
          <a>
            <p className="normal color_grey_800">
              Anamneses
            </p>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/notifications">
          <a>
            <p className="normal color_grey_800">
              Notificações
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
