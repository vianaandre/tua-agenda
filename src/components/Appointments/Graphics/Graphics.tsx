import React from 'react';

import { PCCheck, Clock, Remove } from 'common/icons';
import { theme } from 'common/styles/theme';
import { Container } from 'common/styles/container';
import { ContainerGraphics } from './styles';

export const Graphics: React.FC = () => {
  return (
    <ContainerGraphics>
      <Container>
        <div className="atended item_graphic">
          <div className="header">
            <h6 className="title_two">Atendidos</h6>
            <div className="icon">
              <PCCheck width={24} height={24} color={theme.colors.WHITE} />
            </div>
          </div>
          <div className="body">
            <h6 className="number">12.457</h6>
            <span className="normal color_white">
              <strong>+30%</strong>
              {' '}
              última semana
            </span>
          </div>
          <div className="graphic">
            <svg width="321" height="45" viewBox="0 0 321 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 44L45.4468 21.0381C46.6937 20.394 48.187 20.4504 49.3817 21.1868L74.3476 36.5762C75.3025 37.1648 76.4607 37.3254 77.5398 37.0188L151.872 15.8983C152.777 15.641 153.744 15.7113 154.603 16.0968L215.185 43.2914C216.192 43.7435 217.342 43.7592 218.361 43.3346L320 1" stroke="#45D493" strokeWidth="2" strokeLinecap="round" />
              <circle cx="157" cy="17" r="5" fill="#45D493" />
            </svg>
          </div>
        </div>
        <div className="pending item_graphic">
          <div className="header">
            <h6 className="title_two">Pendentes</h6>
            <div className="icon">
              <Clock width={24} height={24} color={theme.colors.WHITE} />
            </div>
          </div>
          <div className="body">
            <h6 className="number">12.457</h6>
            <span className="normal color_white">
              <strong>-10%</strong>
              {' '}
              última semana
            </span>
          </div>
          <div className="graphic">
            <svg width="321" height="50" viewBox="0 0 321 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.5L48.7619 10.762C49.6869 10.5928 50.642 10.7548 51.4594 11.2198L87.5895 31.77C88.9135 32.5231 90.5504 32.4588 91.8114 31.6042L135.694 1.86035C137.286 0.781369 139.42 0.987907 140.776 2.35209L185.58 47.4446C186.543 48.4135 187.933 48.8242 189.268 48.5338L259.711 33.207C260.337 33.071 260.985 33.0869 261.603 33.2535L320 49" stroke="#FF6233" strokeWidth="2" strokeLinecap="round" />
              <circle cx="262" cy="33" r="5" fill="#FF6233" />
            </svg>
          </div>
        </div>
        <div className="cancel item_graphic">
          <div className="header">
            <h6 className="title_two">Cancelados</h6>
            <div className="icon">
              <Remove width={24} height={24} color={theme.colors.WHITE} />
            </div>
          </div>
          <div className="body">
            <h6 className="number">12.457</h6>
            <span className="normal color_white">
              <strong>-10%</strong>
              {' '}
              última semana
            </span>
          </div>
          <div className="graphic">
            <svg width="321" height="50" viewBox="0 0 321 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19.5L48.7619 10.762C49.6869 10.5928 50.642 10.7548 51.4594 11.2198L87.5895 31.77C88.9135 32.5231 90.5504 32.4588 91.8114 31.6042L135.694 1.86035C137.286 0.781369 139.42 0.987907 140.776 2.35209L185.58 47.4446C186.543 48.4135 187.933 48.8242 189.268 48.5338L259.711 33.207C260.337 33.071 260.985 33.0869 261.603 33.2535L320 49" stroke="#FF6233" strokeWidth="2" strokeLinecap="round" />
              <circle cx="262" cy="33" r="5" fill="#FF6233" />
            </svg>
          </div>
        </div>
      </Container>
    </ContainerGraphics>
  );
};
