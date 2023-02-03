import React from 'react';

import { theme } from 'common/styles/theme';
import { Translation as TranslationIcon, Close } from 'common/icons';
import * as Dialog from '@radix-ui/react-dialog';
import { useLocation } from 'common/hooks/useLocation';
import { LOCALES } from 'common/localization/locales';
import { IconButton } from 'components/IconButton';
import { ContainerTranslation, ContainerTranslationModal } from './styles';
import { TranslationProps } from './interface';

export const Translation: React.FC<TranslationProps> = ({ variant }) => {
  const { location, onChangeLocation } = useLocation();

  return (
    <ContainerTranslation variant={variant}>
      <Dialog.Root>
        <Dialog.Trigger className="dialog_button">
          <TranslationIcon width={22} height={22} color={variant === 'primary' ? theme.colors.GREY[950] : theme.colors.GREY[700]} />
          <p className={`small font_weight_500 ${variant === 'primary' ? 'color_grey_950' : 'color_grey_700'}`}>PT (Brasil)</p>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog_overlay" />
          <Dialog.Content className="dialog_content">
            <ContainerTranslationModal>
              <Dialog.Title className="dialog_title">Alterar idioma</Dialog.Title>
              <Dialog.Description className="dialog_description">
                Defina o seu idioma de preferência para ter uma melhor experiência com a Tua Agenda
              </Dialog.Description>
              <div className="dialog_options">
                <button
                  type="button"
                  onClick={() => onChangeLocation(LOCALES.PORTUGUES)}
                  className={`${location === LOCALES.PORTUGUES ? 'active' : ''}`}
                >
                  PT (Brasil)
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLocation(LOCALES.ENGLISH)}
                  className={`${location === LOCALES.ENGLISH ? 'active' : ''}`}
                >
                  EN (EUA)
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLocation(LOCALES.ESPANHOL)}
                  className={`${location === LOCALES.ESPANHOL ? 'active' : ''}`}
                >
                  ES (Espanha)
                </button>
              </div>
              <Dialog.Close className="dialog_close_translation">
                <IconButton>
                  <Close width={24} height={24} color={theme.colors.GREY[1000]} />
                </IconButton>
              </Dialog.Close>
            </ContainerTranslationModal>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </ContainerTranslation>
  );
};
