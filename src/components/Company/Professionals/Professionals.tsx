import React from 'react';

import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { ContainerProfessionals } from './styles';
import { CardProfessional } from './CardProfessional';

export const Professionals: React.FC = () => {
  const { employees } = useCompany();

  return (
    <ContainerProfessionals>
      <Container>
        <h4 className="title">Agendar com profissional</h4>
        {employees && (
        <div className="professionals">
          <ul>
            {employees.map((item) => (
              <React.Fragment>
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
                <li key={item.id}>
                  <CardProfessional name={item.nome} assessment={2} photoUrl={item.linkImagem} service={item.apelido} />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        )}
      </Container>
    </ContainerProfessionals>
  );
};
