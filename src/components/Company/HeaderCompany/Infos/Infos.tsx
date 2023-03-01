import React, { useMemo } from 'react';

import { Badge } from 'components/Badge';
import { Location } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerInfos, ContainerInfosBanner } from './styles';
import { InfosProps } from './interface';
import { Hours } from './Hours';

export const Infos: React.FC<InfosProps> = ({ countProfissional, config }) => {
  const isDays = useMemo(() => {
    const isFormattedDays = [];

    if (config) {
      if (config.seg) {
        isFormattedDays.push({
          day: 'Segunda Feira',
          hour: config.seg,
        });
      }
      if (config.ter) {
        isFormattedDays.push({
          day: 'Terça Feira',
          hour: config.ter,
        });
      }
      if (config.qua) {
        isFormattedDays.push({
          day: 'Quarta Feira',
          hour: config.qua,
        });
      }
      if (config.qui) {
        isFormattedDays.push({
          day: 'Quinta Feira',
          hour: config.qui,
        });
      }
      if (config.sex) {
        isFormattedDays.push({
          day: 'Sexta Feira',
          hour: config.sex,
        });
      }
      if (config.sab) {
        isFormattedDays.push({
          day: 'Sábado',
          hour: config.sab,
        });
      }
      if (config.dom) {
        isFormattedDays.push({
          day: 'Domingo',
          hour: config.dom,
        });
      }
    }

    return isFormattedDays;
  }, [config]);

  return (
    <ContainerInfos>
      {config && config.linkImagem && (
        <ContainerInfosBanner imageUrl={config.linkImagem} />
      )}
      <div className="infos">
        <div className="infos_header">
          <h3 className="title">Isabella</h3>
          <Badge text={`${countProfissional > 1 ? `${countProfissional} profissionais` : `${countProfissional} profissional`}`} variant="primary" />
        </div>
        <div className="hours_address">
          <Hours
            days={isDays}
          />
          <div className="address">
            <Location width={22} height={22} color={theme.colors.PRIMARY[500]} />
            <p className="small color_normal">
              {config?.endereco}
            </p>
          </div>
        </div>
        <div className="btn">
          <Button.Link href="#to_schedule" variant={ButtonVariantProps.PRIMARY} text="Agendar Agora" />
        </div>
      </div>
    </ContainerInfos>
  );
};
