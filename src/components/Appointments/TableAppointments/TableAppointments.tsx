import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

import { useAppointments } from 'common/hooks/useAppointments';
import { Empty } from 'components/Empty';
import { Container } from 'common/styles/container';
import { ArrowAlternative, PasswordView } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Avatar } from 'components/Avatar';
import { formatMoney } from 'utils/format';
import { ContainerTableAppointments } from './styles';

export const TableAppointments: React.FC = () => {
  const { appointments } = useAppointments();

  return (
    <ContainerTableAppointments>
      {appointments.length > 0 ? (
        <Container>
          <div className="content">
            <ol>
              <li className="hour">
                <button type="button">
                  <p className="normal color_grey_950 font_weight_500">Horário</p>
                  <ArrowAlternative width={24} height={24} color={theme.colors.GREY[700]} />
                </button>
              </li>
              <li className="company">
                <p className="normal color_grey_950 font_weight_500">Empresa</p>
              </li>
              <li className="professionals">
                <p className="normal color_grey_950 font_weight_500">Profissional</p>
              </li>
              <li className="total">
                <p className="normal color_grey_950 font_weight_500">Valor Total</p>
              </li>
              <li className="status">
                <p className="normal color_grey_950 font_weight_500">Status</p>
              </li>
            </ol>
            <Accordion.Root type="multiple">
              {appointments.map((appointment) => (
                <Accordion.Item key={appointment.idAgenda} value={appointment.idAgenda} className="item">
                  <Accordion.Trigger asChild>
                    <ul>
                      <li className="hour">
                        <button type="button">
                          <ArrowAlternative width={24} height={24} color={theme.colors.BLACK[500]} />
                        </button>
                        <p className="hour small color_black_500 font_weight_500">{appointment.dtHrAgendamentoFmt}</p>
                      </li>
                      <li className="company">
                        <p className="hour small color_black_500 font_weight_500">{appointment.nomeEmpresa}</p>
                      </li>
                      <li className="professionals">
                        <Avatar username={appointment.nomeFuncionario} image={undefined} />
                        <div className="infos_professional">
                          <p className="small color_black_500 font_weight_500">{appointment.nomeFuncionario}</p>
                        </div>
                      </li>
                      <li className="total">
                        <p className="small color_black_500 font_weight_500">{formatMoney(appointment.total, 'pt-BR', 'BRL')}</p>
                      </li>
                      <li className={`status ${appointment.situacao}`}>
                        <div className="chip">
                          <p className="small">{appointment.situacaoFmt}</p>
                        </div>
                      </li>
                      <li className="link">
                        <a href="#">
                          <PasswordView width={24} height={24} color={theme.colors.PRIMARY[500]} />
                        </a>
                      </li>
                    </ul>
                  </Accordion.Trigger>
                  <Accordion.Content className="content">
                    <ol>
                      <li className="tag">
                        <p className="small color_grey_700 font_weight_500">#</p>
                      </li>
                      <li className="service">
                        <p className="small color_grey_700 font_weight_500">Serviço</p>
                      </li>
                      <li className="description">
                        <p className="small color_grey_700 font_weight_500">Descrição</p>
                      </li>
                      <li className="duration">
                        <p className="small color_grey_700 font_weight_500">Duração</p>
                      </li>
                      <li className="value">
                        <p className="small color_grey_700 font_weight_500">Valor</p>
                      </li>
                      <li className="category">
                        <p className="small color_grey_700 font_weight_500">Categoria</p>
                      </li>
                    </ol>
                    {appointment.itens.map((item) => (
                      <ul key={item.id} />
                    ))}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </Container>
      ) : (
        <Empty text="Sem agendamentos " />
      )}
    </ContainerTableAppointments>
  );
};
