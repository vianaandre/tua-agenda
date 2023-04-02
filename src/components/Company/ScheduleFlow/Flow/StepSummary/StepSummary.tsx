import React, { useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Container } from 'common/styles/container';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { Avatar } from 'components/Avatar';
import {
  Hour, Company, ArrowAlternative, Alert,
} from 'common/icons';
import { theme } from 'common/styles/theme';
import { useCompany } from 'common/hooks/useCompany';
import { formatMoney } from 'utils/format';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { useAuth } from 'common/hooks/useAuth';
import { ContainerStepSummary } from './styles';
import { CardService } from './CardService';

export const StepSummary: React.FC = () => {
  const {
    selectEmployees, dateSelect, hourSelect, amoutValueServicesSelect, servicesSelected, onSubmitCreateSchedule, loading,
  } = useScheduleFlow();
  const { config, onSelectService } = useCompany();
  const { user, onAuthPerScheduleFlow } = useAuth();

  const [isObservation, setIsObservation] = useState<string>();

  return (
    <ContainerStepSummary>
      <Container>
        <div className="header">
          <h6 className="title_two">Resumo</h6>
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
        <div className="list_services">
          <h6 className="title color_grey_1000">Serviços</h6>
          <div className="list">
            <div className="header_list list_data">
              <div className="tag">
                <p className="small color_grey_700">#</p>
              </div>
              <div className="name">
                <p className="small color_grey_700">Serviço</p>
              </div>
              <div className="description">
                <p className="small color_grey_700">Descrição</p>
              </div>
              <div className="duration">
                <p className="small color_grey_700">Duração</p>
              </div>
              <div className="value">
                <p className="small color_grey_700">Valor</p>
              </div>
              <div className="category">
                <p className="small color_grey_700">Categoria</p>
              </div>
            </div>
            {servicesSelected.map((item, index) => (
              <CardService category="Cabelo" description={item.descricao} duration={item.tempoDuracao} name={item.nome} remove={() => onSelectService(item.id)} tag={index + 1} value={item.preco} key={item.id} disabledRemove={servicesSelected.length <= 1} />
            ))}
          </div>
        </div>
        <div className="observation">
          <textarea name="observation" id="observation" cols={30} rows={5} placeholder="Observação" onChange={(event) => setIsObservation(event.target.value)} />
        </div>
        <div className="buttom_complete">
          <div>
            {!user && (
            <div className="help">
              <Alert width={24} height={24} color={theme.colors.PRIMARY[800]} />
              <p className="small ">Acesse sua conta para dar continuidade no seu agendamento</p>
            </div>
            )}
            <p className="small color_black_500">
              Valor total
              {' '}
              <strong>{formatMoney(amoutValueServicesSelect, 'pt-BR', 'BRL')}</strong>
            </p>
          </div>
          {user && (
            <Button.Normal
              variant={ButtonVariantProps.FULL}
              text="Confirmar Agendamento"
              type="button"
              icon={{
                icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
                direction: 'right',
              }}
              onClick={() => onSubmitCreateSchedule(isObservation)}
              disabled={loading}
              loading={loading}
            />
          )}
          {!user && (
            <Button.Normal
              variant={ButtonVariantProps.FULL}
              text="Acessar sua conta"
              type="button"
              disabled={loading}
              loading={loading}
              className="login"
              onClick={() => onAuthPerScheduleFlow(true)}
            />
          )}
        </div>
      </Container>
    </ContainerStepSummary>
  );
};
