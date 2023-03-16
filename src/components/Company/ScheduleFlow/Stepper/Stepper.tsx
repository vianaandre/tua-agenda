import React from 'react';

import { Container } from 'common/styles/container';
import { stepperScheduleFlow } from 'utils/stepper';
import { useScheduleFlow } from 'common/hooks/useScheduleFlow';
import { ContainerStepper } from './styles';

export const Stepper: React.FC = () => {
  const { stepper, onSelectStepper } = useScheduleFlow();

  return (
    <ContainerStepper>
      <Container>
        <ul>
          {stepperScheduleFlow.map((item) => (
            <li key={item.stage}>
              <button type="button" className={`${stepper.find((i) => i.stepper === item.stepper) ? 'active' : ''}`} onClick={() => onSelectStepper(item)} disabled={item.stepper > stepper.length}>
                <div>{item.stepper + 1}</div>
                <div>
                  <p className="normal color_white font_weight_500">{item.stage}</p>
                  <span className="small color_white">{item.description}</span>
                </div>
                <div />
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </ContainerStepper>
  );
};
