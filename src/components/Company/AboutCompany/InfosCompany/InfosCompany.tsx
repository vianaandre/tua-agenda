import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { useCompany } from 'common/hooks/useCompany';
import { SocialMedia } from 'components/SocialMedia';
import { SocialMediaProps } from 'common/interface/SocialMediaProps';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ArrowRight } from 'common/icons';
import { theme } from 'common/styles/theme';
import Link from 'next/link';
import { ContainerInfosCompany } from './styles';

export const InfosCompany: React.FC = () => {
  const { config } = useCompany();
  const { formatMessage } = useIntl();

  const isMediaSocial = useMemo(() => {
    const isSocialMedia = [] as SocialMediaProps[];

    if (config) {
      if (config.facebook && config.facebook !== '') {
        isSocialMedia.push({
          link: config.facebook,
          type: 'facebook',
        });
      }
      if (config.instagram && config.instagram !== '') {
        isSocialMedia.push({
          link: config.instagram,
          type: 'instagram',
        });
      }
      if (config.linkTikTok && config.linkTikTok !== '') {
        isSocialMedia.push({
          link: config.linkTikTok,
          type: 'tiktok',
        });
      }
      if (config.linkYouTube && config.linkYouTube !== '') {
        isSocialMedia.push({
          link: config.linkYouTube,
          type: 'youtube',
        });
      }
    }

    return isSocialMedia;
  }, [config]);

  return (
    <ContainerInfosCompany>
      <div className="infos">
        {isMediaSocial.length > 0 && (
        <div className="social_media info">
          <h6 className="title">
            {formatMessage({
              id: 'SOCIAL_MEDIA',
            })}
          </h6>
          <SocialMedia items={isMediaSocial} color="primary" help />
        </div>
        )}
        {config && config.telefone && (
        <div className="phone info">
          <h6 className="title">
            {formatMessage({
              id: 'PHONE',
            })}
          </h6>
          <Link href={`tel:${config.telefone}`}>
            <a target="_black">{config.telefone}</a>
          </Link>
        </div>
        )}
        {config && config.email && (
        <div className="email info">
          <h6 className="title">E-mail</h6>
          <Link href={`mailto:${config.email}`}>
            <a className="color_normal" target="_black">{config.email}</a>
          </Link>
        </div>
        )}
      </div>
      {config && config.enderecoCompleto && (
      <div className="info_address">
        <h4 className="title">Google Maps</h4>
        <p className="normal">
          {formatMessage({
            id: 'VIEW_DETAILS_ADDRESS',
          })}
        </p>
        <div className="map">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY_API}&q=${encodeURIComponent(config.enderecoCompleto)}`}
            loading="lazy"
            height="313"
            width="100%"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            style={{
              border: 'none',
            }}
          />
          <div className="link">
            <Button.Link
              href={`https://www.google.com/maps/dir/${config.latitude},${config.longitude}`}
              variant={ButtonVariantProps.OUTLINE}
              target="_black"
              text={`${formatMessage({
                id: 'OPEN',
              })} Google Maps`}
              icon={{
                direction: 'right',
                icon: <ArrowRight width={24} height={24} color={theme.colors.PRIMARY[500]} />,
              }}
            />
          </div>
        </div>
      </div>
      )}
    </ContainerInfosCompany>
  );
};
