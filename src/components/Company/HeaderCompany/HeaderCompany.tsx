import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from 'common/styles/container';
import BannerEffectOne from 'common/assets/company/banner-effect-one.png';
import BannerEffectTwo from 'common/assets/company/banner-effect-two.png';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerHeaderCompany, ContainerHeaderCompanyBreadCrumb } from './styles';
import { Infos } from './Infos';

export const HeaderCompany: React.FC = () => {
  const { config, employees } = useCompany();

  return (
    <ContainerHeaderCompany>
      <div className="effect_one">
        <Image src={BannerEffectOne.src} width={BannerEffectOne.width} height={BannerEffectOne.height} alt="Banner" />
      </div>
      <div className="effect_two">
        <Image src={BannerEffectTwo.src} width={BannerEffectTwo.width} height={BannerEffectTwo.height} alt="Banner" />
      </div>
      <Container>
        <ContainerHeaderCompanyBreadCrumb>
          <li>
            <Link href="/">
              <a>
                <span>Home /</span>
              </a>
            </Link>
          </li>
          <li>
            <span>Empresas /</span>
          </li>
          {config && config.nome && (
          <li>
            <Link href="/">
              <a>
                <span>{config.nome}</span>
              </a>
            </Link>
          </li>
          )}
        </ContainerHeaderCompanyBreadCrumb>
        <Infos
          linkImage={config?.linkImagem}
          countProfissional={employees ? employees?.length : 1}
        />
      </Container>
    </ContainerHeaderCompany>
  );
};
