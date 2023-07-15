import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { Badge } from 'components/Badge';
import { Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerInfos, ContainerInfosBanner } from './styles';
import { InfosProps } from './interface';
import { Hours } from './Hours';

export const Infos: React.FC<InfosProps> = ({ countProfissional, config }) => {
  const { formatMessage } = useIntl();

  const isDays = useMemo(() => {
    const isFormattedDays = [];

    if (config) {
      if (config.seg) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'MONDAY',
          }),
          hour: config.seg,
        });
      }
      if (config.ter) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'TUESDAY',
          }),
          hour: config.ter,
        });
      }
      if (config.qua) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'FOURTH',
          }),
          hour: config.qua,
        });
      }
      if (config.qui) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'FIFTH',
          }),
          hour: config.qui,
        });
      }
      if (config.sex) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'FRIDAY',
          }),
          hour: config.sex,
        });
      }
      if (config.sab) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'SATURDAY',
          }),
          hour: config.sab,
        });
      }
      if (config.dom) {
        isFormattedDays.push({
          day: formatMessage({
            id: 'SUNDAY',
          }),
          hour: config.dom,
        });
      }
    }

    return isFormattedDays;
  }, [config, formatMessage]);

  return (
    <ContainerInfos>
      {config && config.linkImagem && (
        <ContainerInfosBanner imageUrl={config.linkImagem} />
      )}
      <div className="infos">
        <div className="infos_header">
          <h3 className="title">{config?.nome}</h3>
          <Badge
            text={`${countProfissional > 1 ? `${countProfissional} ${formatMessage({
              id: 'PROFESSIONAL_PLURAL',
            })}` : `${countProfissional} ${formatMessage({
              id: 'PROFESSIONAL_SINGULAR',
            })}`}`}
            variant="primary"
          />
        </div>
        <div className="hours_address">
          <Hours
            days={isDays}
          />
          {config && config.endereco && (
            <div className="address">
              <Location width={24} height={24} color={theme.colors.PRIMARY[500]} />
              <div className="text">
                <a href={`https://www.google.com/maps/dir/?api=1&origin=&destination=${config?.endereco}`} target="_black">
                  <p className="small color_normal">
                    {config?.endereco}
                  </p>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="btn">
          <Button.Link
            href="#flowSchedule"
            variant={ButtonVariantProps.PRIMARY}
            text={formatMessage({
              id: 'SCHEDULE_NOW',
            })}
          />
        </div>
      </div>
    </ContainerInfos>
  );
};
