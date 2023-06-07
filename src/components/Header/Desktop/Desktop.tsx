import Link from 'next/link';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import { Location, Logo } from 'common/icons';
import { useLocation } from 'common/hooks/useLocation';
import { theme } from 'common/styles/theme';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerDesktop, ContainerHeaderLeft, ContainerHeaderRight } from './styles';
import { MenuNotUser } from './MenuNotUser';
import { MenuUser } from './MenuUser';

export const Desktop: React.FC = () => {
  const { onGetLocationBrowser, locationPerCityAndState, onUpdatedLocation } = useLocation();
  const { user } = useAuth();
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (user && user.cidade && user.estado) {
      onUpdatedLocation({
        city: user.cidade,
        state: user.estado,
      });
    }
  }, [user, onUpdatedLocation]);

  return (
    <ContainerDesktop className={user ? 'auth_user' : ''}>
      <ContainerHeaderLeft className={user ? 'user_active' : ''}>
        <Link href="/" legacyBehavior passHref>
          <a>
            {user ? (
              <Logo width={159} height={19} color={theme.colors.WHITE} />
            ) : (
              <Logo width={159} height={19} color={theme.colors.PRIMARY[500]} />
            )}
          </a>
        </Link>
        {!locationPerCityAndState ? (
          <button type="button" onClick={onGetLocationBrowser} className="location">
            {user ? (
              <Location width={22} height={22} color={theme.colors.WHITE} />
            ) : (
              <Location width={22} height={22} color={theme.colors.GREY[950]} />
            )}
            <p className="small">
              {formatMessage({
                id: 'LOCALIZATION',
              })}
            </p>
          </button>
        ) : (
          <div className="location">
            {user ? (
              <Location width={22} height={22} color={theme.colors.WHITE} />
            ) : (
              <Location width={22} height={22} color={theme.colors.GREY[950]} />
            )}
            <p className="small">
              {locationPerCityAndState.city}
            </p>
          </div>
        )}
      </ContainerHeaderLeft>
      <ContainerHeaderRight>
        {user ? (
          <MenuUser />
        ) : (
          <MenuNotUser />
        )}
      </ContainerHeaderRight>
    </ContainerDesktop>
  );
};
