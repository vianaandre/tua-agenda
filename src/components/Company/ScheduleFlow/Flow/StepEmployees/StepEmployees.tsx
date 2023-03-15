import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Input } from 'components/Form';
import { InputVariantProps } from 'common/interface/InputVariantProps';
import { Search } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Container } from 'common/styles/container';
import { useCompany } from 'common/hooks/useCompany';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { ButtonVariantProps } from 'common/interface/ButtonVariantProps';
import { ContainerStepEmployees } from './styles';

export const StepEmployees: React.FC = () => {
  const methods = useForm();
  const { employees } = useCompany();

  return (
    <ContainerStepEmployees>
      <Container>
        <div className="header">
          <form action="">
            <FormProvider {...methods}>
              <Input
                id="search"
                name="search"
                type="text"
                placeholder="Pesquisar"
                variant={InputVariantProps.PRIMARY}
                icon={{
                  icon: <Search width={24} height={24} color={theme.colors.GREY[500]} />,
                  direction: 'left',
                }}
              />
            </FormProvider>
          </form>
        </div>
        <div className="list">
          {employees && employees.length && (
            <ul>
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
              {employees.map((item) => (
                <li key={item.id}>
                  <button type="button">
                    <Avatar
                      username={item.nome}
                      image={item.linkImagem}
                    />
                    <p className="normal color_normal">{item.nome}</p>
                    <span className="small color_black_500">{item.telefone}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button.Normal text="Próxima etapa" variant={ButtonVariantProps.FULL} type="button" className="next" />
      </Container>
    </ContainerStepEmployees>
  );
};
