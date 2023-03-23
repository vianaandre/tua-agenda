import React from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Container } from 'common/styles/container';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { Avatar } from 'components/Avatar';
import { Hour, Company } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useCompany } from 'common/hooks/useCompany';
import { formatMoney } from 'utils/format';
import { ContainerStepSummary } from './styles';

export const StepSummary: React.FC = () => {
  const {
    selectEmployees, dateSelect, hourSelect, amoutValueServicesSelect,
  } = useScheduleFlow();
  const { config } = useCompany();

  return (
    <ContainerStepSummary>
      <Container>
        <div className="header">
          <h6 className="title_two">Selecione o horário</h6>
          <div className="list_infos">
            {selectEmployees.map((selectEmployee) => (
              <ul key={selectEmployee.id}>
                <li className="employee">
                  <Avatar username={selectEmployee.nome} image={selectEmployee.linkImagem} variant="small" />
                  <div className="infos">
                    <p className="small color_normal">Profissional</p>
                    <span className="normal color_black_500">{selectEmployee.nome}</span>
                  </div>
                </li>
                <li className="employee">
                  <Hour width={48} height={48} color={theme.colors.PRIMARY[500]} />
                  <div className="infos">
                    <p className="small color_normal">Horário</p>
                    <span className="normal color_black_500">
                      {format(dateSelect ?? new Date(), 'dd/MM', {
                        locale: ptBR,
                      })}
                      {' '}
                      ás
                      {' '}
                      {hourSelect?.hora}
                    </span>
                  </div>
                </li>
                <li className="employee">
                  <Company width={48} height={48} color={theme.colors.PRIMARY[500]} />
                  <div className="infos">
                    <p className="small color_normal">Empresa</p>
                    <span className="normal color_black_500">
                      {config?.nome}
                    </span>
                  </div>
                </li>
                <li className="employee">
                  <Company width={48} height={48} color={theme.colors.PRIMARY[500]} />
                  <div className="infos">
                    <p className="small color_normal">Valor total</p>
                    <span className="normal color_black_500">
                      {formatMoney(amoutValueServicesSelect, 'pt-br', 'BRL')}
                    </span>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </ContainerStepSummary>
  );
};
