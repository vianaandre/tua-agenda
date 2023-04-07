import React, { useCallback } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import { useDetailsSchedule } from 'common/hooks/useDetailsSchedule';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ArrowAlternative, Check, Link } from 'common/icons';
import { theme } from 'common/styles/theme';
import { StatusProps } from 'common/interface/StatusProps';
import { formatMoney } from 'utils/format';
import { PaymentGenerateProps } from 'common/interface/PaymentGenerateProps';
import { ContainerPaymentOptions } from './styles';

export const PaymentOptions: React.FC = () => {
  const {
    companyDataAlternative, onSelectedMethodPayment, selectMethodPayment, onGeneratePayment, paymentsGenerate, loadingPaymnetGenerate,
  } = useDetailsSchedule();

  const isStatusPayment = useCallback((payment: PaymentGenerateProps) => {
    if (payment.status === 'AGUARDANDO') {
      return {
        message: 'Aguardando Pagamento',
        status: StatusProps.AGUARDANDO,
      };
    }
    if (payment.status === 'CONCLUIDO') {
      return {
        message: 'Pagamento efetuado',
        status: StatusProps.CONCLUIDO,
      };
    }
    return {
      message: 'Pagamento efetuado',
      status: StatusProps.CONCLUIDO,
    };
  }, []);

  return (
    <ContainerPaymentOptions>
      <h6 className="title_two">Efetuar Pagamento</h6>
      {companyDataAlternative && companyDataAlternative.configPagamento && companyDataAlternative.configPagamento.peValorAgendamento && companyDataAlternative.configPagamento.peValorAgendamento > 0 && (
        <p className="small color_grey_850">
          {companyDataAlternative.configPagamento.peValorAgendamento === 100 && (
            'Para garantir sua reserva, efetue o pagamento.'
          )}
          {companyDataAlternative.configPagamento.peValorAgendamento < 100 && (
            `Para garantir sua reserva, efetue o pagamento de ${companyDataAlternative?.configPagamento?.peValorAgendamento}% do valor do pagamento.`
          )}
        </p>
      )}
      {companyDataAlternative && companyDataAlternative.configPagamento && companyDataAlternative.configPagamento.gateways && companyDataAlternative.configPagamento.gateways.length > 0 && paymentsGenerate.length <= 0 && (
        <div className="gateways_payment">
            {companyDataAlternative.configPagamento.gateways.map((gateway) => (
              <Tooltip.Provider key={gateway.id}>
                <Tooltip.Root key={gateway.id} delayDuration={100}>
                  <Tooltip.Trigger asChild>
                    <button type="button" onClick={() => onSelectedMethodPayment(gateway.id)} className={`${selectMethodPayment === gateway.id ? 'active' : ''}`}>
                      <img src={gateway.linkImagem} width={218} height={99} alt={gateway.nome} />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content sideOffset={5} className="tooltip_social_content" side="bottom">
                      <p className="small color_white">
                        {gateway.descricao}
                      </p>
                      <Tooltip.Arrow className="tooltip_social_content_arrow" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
        </div>
      )}
      {paymentsGenerate && paymentsGenerate.length > 0 && (
        paymentsGenerate.map((paymentGenerate) => (
          <div className="payment_generate">
            {companyDataAlternative && companyDataAlternative.configPagamento && companyDataAlternative.configPagamento.gateways && companyDataAlternative.configPagamento.gateways.find((gateway) => gateway.id === paymentGenerate.gateway) && (
              <img src={companyDataAlternative.configPagamento.gateways.find((gateway) => gateway.id === paymentGenerate.gateway)?.linkImagem} alt={companyDataAlternative.configPagamento.gateways.find((gateway) => gateway.id === paymentGenerate.gateway)?.nome} />
            )}
            {isStatusPayment && (
              <div className={`status ${isStatusPayment(paymentGenerate)?.status}`}>
                <div className={isStatusPayment(paymentGenerate)?.status} />
                <p className="normal">{isStatusPayment(paymentGenerate)?.message}</p>
              </div>
            )}
            <h6 className="title_two">{formatMoney(paymentGenerate.valorLiquido, 'pt-BR', 'BRL')}</h6>
            {isStatusPayment(paymentGenerate) && isStatusPayment(paymentGenerate)?.status === StatusProps.AGUARDANDO ? (
              <a href={paymentGenerate.link} target="_black">
                <Link width={28} height={28} color={theme.colors.PRIMARY[500]} />
                <p className="normal color_black_500">Pagar agora</p>
              </a>
            ) : (
              <Check width={32} height={32} color={theme.colors.SUCCESS} />
            )}
          </div>
        ))
      )}
      {paymentsGenerate && paymentsGenerate.length <= 0 && (
        <Button.Normal
          text="Realizar pagamento"
          type="button"
          variant={ButtonVariantProps.FULL}
          disabled={!selectMethodPayment ?? loadingPaymnetGenerate}
          loading={loadingPaymnetGenerate}
          icon={{
            direction: 'right',
            icon: <ArrowAlternative width={24} height={24} color={theme.colors.WHITE} />,
          }}
          className="confim_method_payment"
          onClick={onGeneratePayment}
        />
      )}
    </ContainerPaymentOptions>
  );
};
