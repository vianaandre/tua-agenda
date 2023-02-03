import { useContextSelector } from 'use-context-selector';
import { AnimationContext } from 'common/context/AnimationContext';

export const useAnimation = () => {
  const onAnimationRipple = useContextSelector(AnimationContext, (animation) => animation.onAnimationRipple);
  const onCloseMenu = useContextSelector(AnimationContext, (animation) => animation.onCloseMenu);
  const onShowMenu = useContextSelector(AnimationContext, (animation) => animation.onShowMenu);
  const showMenu = useContextSelector(AnimationContext, (animation) => animation.showMenu);

  return {
    onAnimationRipple,
    onShowMenu,
    onCloseMenu,
    showMenu,
  };
};
