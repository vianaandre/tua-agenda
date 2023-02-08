import React from 'react';
import Image from 'next/image';

import bgPhrase from 'common/assets/loginAndRegister/bg-phrase.jpg';
import effectOne from 'common/assets/loginAndRegister/effect-one.png';
import effectTwo from 'common/assets/loginAndRegister/effect-two.svg';
import effectThree from 'common/assets/loginAndRegister/effect-three.png';
import effectFour from 'common/assets/loginAndRegister/effect-four.png';
import { ContainerPhrase } from './styles';

export const Phrase: React.FC = () => {
  return (
    <ContainerPhrase bgImage={bgPhrase.src}>
      <div className="effect_one">
        <Image src={effectOne.src} width={effectOne.width} height={effectOne.height} alt="Imagem de efeito" />
      </div>
      <div className="effect_two">
        <Image src={effectTwo.src} width={effectTwo.width} height={effectTwo.height} alt="Imagem de efeito" />
      </div>
      <div className="effect_three">
        <Image src={effectThree.src} width={effectThree.width} height={effectThree.height} alt="Imagem de efeito" />
      </div>
      <div className="effect_four">
        <Image src={effectFour.src} width={effectFour.width} height={effectFour.height} alt="Imagem de efeito" />
      </div>
      <div className="content">
        <p>
          Estou realmente amando! Suporte sempre me atende quando preciso, agenda organizada e completa! Não tenho nada pra reclamar e sim, elogiar. Super indico!
        </p>
        <div>
          <strong>Rafaela Calasans</strong>
          <div>
            <svg width="24" height="24" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Icon  5">
                <path id="Oval" opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M15 30.4515C23.2843 30.4515 30 23.7358 30 15.4515C30 7.16727 23.2843 0.451538 15 0.451538C6.71573 0.451538 0 7.16727 0 15.4515C0 23.7358 6.71573 30.4515 15 30.4515Z" fill="#0FAB60" />
                <path id="Icon" d="M12.9981 20.2318L8.92091 16.1791C8.80698 16.0651 8.75002 15.9186 8.75002 15.7396C8.75002 15.5606 8.80698 15.4141 8.92091 15.3002L9.82423 14.4213C9.93816 14.291 10.0806 14.226 10.2515 14.226C10.4224 14.226 10.5729 14.291 10.7031 14.4213L13.4375 17.1556L19.2969 11.2963C19.4271 11.1661 19.5776 11.101 19.7485 11.101C19.9194 11.101 20.0618 11.1661 20.1758 11.2963L21.0791 12.1752C21.193 12.2891 21.25 12.4356 21.25 12.6146C21.25 12.7937 21.193 12.9401 21.0791 13.0541L13.877 20.2318C13.763 20.362 13.6165 20.4271 13.4375 20.4271C13.2585 20.4271 13.112 20.362 12.9981 20.2318Z" fill="#0FAB60" />
              </g>
            </svg>
            <span>Play Store</span>
          </div>
        </div>
      </div>
    </ContainerPhrase>
  );
};
