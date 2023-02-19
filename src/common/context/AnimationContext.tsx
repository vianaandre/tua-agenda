import React, { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

interface AnimationContextProps {
    showMenu: boolean;
    onAnimationRipple: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    onShowMenu: () => void;
    onCloseMenu: () => void;
}

export const AnimationContext = createContext({} as AnimationContextProps);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const handleShowMenu = useCallback(() => {
    setIsShowMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsShowMenu(false);
  }, []);

  const handleAnimationRipple = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.height = `${diameter}px`;
    circle.style.width = circle.style.height;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = btn.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }, []);

  return (
    <AnimationContext.Provider value={{
      onAnimationRipple: handleAnimationRipple, onShowMenu: handleShowMenu, onCloseMenu: handleCloseMenu, showMenu: isShowMenu,
    }}
    >
      {children}
    </AnimationContext.Provider>
  );
}
