import React from 'react';
import { format } from 'date-fns';

import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { Modal } from './Modal';
import { ContainerWaitingList } from './styles';

export const WaitingList: React.FC = () => {
  const { dateSelect } = useScheduleFlow();

  return (
    <ContainerWaitingList>
      <h4 className="title">😢</h4>
      <p className="small color_dark">
        Poxa, que pena.
        {' '}
        <br />
        Parece que não temos  nenhum horário disponível
        para o dia
        {' '}
        {format(dateSelect ?? new Date(), 'dd/MM')}
        . Mas não se preocupe ainda sim você consegue agendar.
      </p>
      <Modal />
      <p className="small color_grey_900">
        *Caso seja liberado uma horário para você será encaminhado um e-mail/notificação comunicado
      </p>
    </ContainerWaitingList>
  );
};
