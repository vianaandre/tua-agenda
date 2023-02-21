import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { UserProps } from 'common/interface/UserProps';
import { Avatar } from 'components/Avatar';
import { ArrowAlternativeBottom, User, Logout } from 'common/icons';
import { theme } from 'common/styles/theme';
import Link from 'next/link';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerProfile, ContainerProfileAvatar } from './styles';

export const Profile: React.FC<UserProps> = ({ imageUrl, nome }) => {
  const { onLogoutUser } = useAuth();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ContainerProfile>
      <DropdownMenu.Root onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
        <DropdownMenu.Trigger asChild>
          <button type="button">
            {imageUrl && (
              <ContainerProfileAvatar imageUrl={imageUrl} />
            )}
            {!imageUrl && nome && (
              <Avatar username={nome} />
            )}
            <div className="infos">
              <p className="normal color_white">
                {nome ? (
                  <React.Fragment>
                    {nome.split(' ')[0]}
                    {' '}
                    {nome.split(' ').length > 1 ? nome?.split(' ')[nome.split(' ').length - 1] : ''}
                  </React.Fragment>
                ) : 'Sem nome'}
              </p>
              <p className="small color_grey_800">Cliente</p>
            </div>
            <div className={`icon_btn ${isOpen ? 'open' : ''}`}>
              <ArrowAlternativeBottom width={24} height={24} color={theme.colors.WHITE} />
            </div>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content sideOffset={5} className="dropdown_profile_content">
            <DropdownMenu.Item className="dropdown_profile_content_item" onClick={() => setIsOpen(false)}>
              <Link href="/profile">
                <a>
                  Meu Perfil
                  <User width={25} height={25} color={theme.colors.BLACK[500]} />
                </a>
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown_profile_content_item">
              <button
                type="button"
                className="logout"
                onClick={() => {
                  setIsOpen(false);
                  onLogoutUser();
                }}
              >
                Sair
                <Logout width={24} height={24} color={theme.colors.DANGER} />
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ContainerProfile>
  );
};
