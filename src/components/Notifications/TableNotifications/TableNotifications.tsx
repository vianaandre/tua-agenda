import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Loading } from 'components/Loading';

import { Container } from 'common/styles/container';
import { Notification, ArrowAlternative, Whats } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Empty } from 'components/Empty';
import { ContainerTableNotifications } from './styles';
import { useTableNotifications } from './useTableNotifications';

export const TableNotifications: React.FC = () => {
  const {
    notifications, handleLoadCompany, companySelect, loading,
  } = useTableNotifications();

  return (
    <ContainerTableNotifications>
      <Loading open={loading === 'notifications'} />
      <Container>
        {notifications && notifications.length > 0 ? (
          <React.Fragment>
            <div className="header">
              <ol>
                <li className="date">
                  <p className="normal font_weight_500 color_grey_950">Data</p>
                </li>
                <li className="company">
                  <p className="normal font_weight_500 color_grey_950">Empresa</p>
                </li>
                <li className="title">
                  <p className="normal font_weight_500 color_grey_950">Título</p>
                </li>
                <li className="description">
                  <p className="normal font_weight_500 color_grey_950">Descrição</p>
                </li>
              </ol>
            </div>
            <Accordion.Root
              type="multiple"
              onValueChange={(value) => {
                if (value && value.length > 0) {
                  const [, companyId] = value[0].split('+');
                  handleLoadCompany(companyId);
                }
              }}
            >
              {notifications?.map((notification) => (
                <Accordion.Item key={`${notification.id}`} value={`${notification.id}+${notification.empresaId}`} className="item">
                  <Accordion.Trigger asChild>
                    <div className="list_header">
                      <ul className="content_appointment list_desktop">
                        <li className="date">
                          <button type="button" className={`${notification.dtLido ? 'view' : 'not_view'}`}>
                            <Notification width={24} height={24} color={theme.colors.PRIMARY[800]} />
                          </button>
                          <p className="hour small color_black_500 font_weight_500">{notification.dtInclusaoFmt}</p>
                        </li>
                        <li className="company">
                          <p className="hour small color_black_500 font_weight_500">{notification.empresaNome}</p>
                        </li>
                        <li className="title">
                          <p className="hour small color_black_500 font_weight_500">{notification.titulo}</p>
                        </li>
                        <li className="description">
                          <p className="hour small color_black_500 font_weight_500">{notification.descricao}</p>
                          <button type="button">
                            <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />
                          </button>
                        </li>
                      </ul>
                      <div className="content_appointment list_mobile">
                        <div className="content_list_mobile">
                          <div className="date notification">
                            <button type="button" className={`${notification.dtLido ? 'view' : 'not_view'}`}>
                              <Notification width={24} height={24} color={theme.colors.PRIMARY[800]} />
                            </button>
                            <p className="hour small color_grey_850 font_weight_500">{notification.dtInclusaoFmt}</p>
                          </div>
                          <div className="company">
                            <p className="hour small color_black_500 font_weight_500">{notification.empresaNome}</p>
                          </div>
                          <div className="description">
                            <p className="hour small color_grey_850 font_weight_500">{notification.descricao}</p>
                          </div>
                        </div>
                        <button type="button" className="btn-arrow">
                          <ArrowAlternative width={24} height={24} color={theme.colors.PRIMARY[500]} />
                        </button>
                      </div>
                    </div>
                  </Accordion.Trigger>
                  <Accordion.Content className="content_accordion">
                    <div className="content_notification">
                      <div className="infos">
                        <p className="small color_black_500 font_weight_500">{`Enviado por ${notification.empresaNome} em ${notification.dtInclusaoFmt}`}</p>
                        <p className="small color_black_500 font_weight_500">{`Notificação lida em ${notification.dtLidoFmt}`}</p>
                      </div>
                      {companySelect && (
                      <div className="btns">
                        <a href={`https://wa.me/${companySelect.telefoneSemFormatacao}`} className="whats" target="_blank" rel="noreferrer">
                          <Whats
                            width={24}
                            height={24}
                            color={theme.colors.PRIMARY[500]}
                          />
                          <p className="normal color_normal font_weight_500">Enviar Whatsapp</p>
                        </a>
                        <a href={`sms://${companySelect.telefoneSemFormatacao}`} className="sms phone" target="_blank" rel="noreferrer">
                          <p className="normal color_normal font_weight_500">Enviar SMS</p>
                          <ArrowAlternative
                            width={24}
                            height={24}
                            color={theme.colors.PRIMARY[500]}
                          />
                        </a>
                        <a href={`tel://${companySelect.telefoneSemFormatacao}`} className="call phone" target="_blank" rel="noreferrer">
                          <p className="normal color_normal font_weight_500">Ligar</p>
                          <ArrowAlternative
                            width={24}
                            height={24}
                            color={theme.colors.PRIMARY[500]}
                          />
                        </a>
                      </div>
                      )}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </React.Fragment>
        ) : (
          <Empty
            text="Nada encontrado"
          />
        )}
      </Container>
    </ContainerTableNotifications>
  );
};
