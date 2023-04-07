import React, { useMemo } from 'react';

import { Alert } from 'components/Alert';
import { StatusProps } from 'common/interface/StatusProps';
import { Container } from 'common/styles/container';
import { Company, Hour } from 'common/icons';
import { theme } from 'common/styles/theme';
import { useCompany } from 'common/hooks/useCompany';
import { Avatar } from 'components/Avatar';
import { formatMoney } from 'utils/format';
import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { CardService } from 'components/CardService';
import { ActionsButtons } from './ActionsButtons';
import { ContainerInfos } from './styles';
import { PaymentOptions } from './PaymentOptions';

export const Infos: React.FC = () => {
  const { config, selectEmployees, services } = useCompany();
  const { schedule, companyDataAlternative } = useDetailsSchedule();

  const isMessages = useMemo(() => {
    return (
      <p>
        Seu agendamento está
        {' '}
        <strong>Pendente de pagamento</strong>
        {' '}
        <br />
        Faça o pagamento abaixo para garantir sua reserva
      </p>
    );
  }, []);

  return (
    <ContainerInfos>
      <Container>
        {schedule?.situacaoFmt === 'Pendente' && companyDataAlternative && companyDataAlternative.configPagamento && companyDataAlternative.configPagamento.peValorAgendamento && companyDataAlternative.configPagamento.peValorAgendamento > 0 && companyDataAlternative.configPagamento.gateways && companyDataAlternative.configPagamento.gateways.length > 0 && (
        <Alert
          status={StatusProps.AGUARDANDO}
          message={isMessages}
        />
        )}
        {schedule?.situacao === 'AGENDADO' && (
        <ActionsButtons />
        )}
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
                    {schedule?.inicioFmt}
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
                    {formatMoney(schedule?.total ?? 0, 'pt-br', 'BRL')}
                  </span>
                </div>
              </li>
            </ul>
          ))}
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
            {schedule?.itens.map((item, index) => (
              <CardService category="Cabelo" description={services?.find((service) => service.id === item.id)?.descricao ?? '-'} duration={services?.find((service) => service.id === item.id)?.tempoDuracao ?? '-'} name={services?.find((service) => service.id === item.id)?.nome ?? item.nome} value={services?.find((service) => service.id === item.id)?.preco ?? item.valor} key={item.id} disabledRemove tag={index + 1} />
            ))}
          </div>
        </div>
        <div className="observation">
          <p className="small color_grey_850">
            Observação:
            {' '}
            {schedule?.observacaoPublica ?? '-'}
          </p>
        </div>
        {schedule?.situacao === 'AGENDADO' && (
        <PaymentOptions />
        )}
      </Container>
    </ContainerInfos>
  );
};
