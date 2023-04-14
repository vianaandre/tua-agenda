import React from 'react';
import { Close } from '@radix-ui/react-dialog';

import { ReactCalendar } from 'components/_ui/ReactCalendar';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerModalSelectDate } from './styles';
import { ModalSelectDateType } from './types';

export const ModalSelectDate: React.FC<ModalSelectDateType> = ({ onSelectDateFilter, dateFilter }) => {
  return (
    <ContainerModalSelectDate>
      <div className="header">
        <h6 className="title">Seleciona uma data para filtrar</h6>
      </div>
      <div className="body">
        <ReactCalendar
          onChange={(date: Date) => onSelectDateFilter(date, false)}
          value={dateFilter}
        />
      </div>
      <div className="footer">
        <Close asChild>
          <Button.Normal type="button" variant={ButtonVariantProps.SECONDARY} text="Cancelar" />
        </Close>
        <Close>
          <Button.Normal type="button" variant={ButtonVariantProps.PRIMARY} text="Confirmar" onClick={() => dateFilter && onSelectDateFilter(dateFilter, true)} />
        </Close>
      </div>
    </ContainerModalSelectDate>
  );
};
