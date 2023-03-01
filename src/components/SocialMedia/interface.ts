import { SocialMediaProps as SocialMediaPropsGlobal } from 'common/interface/SocialMediaProps';

export type ColorSocialMediaProps = 'transparent' | 'primary'

export interface SocialMediaProps {
    items: SocialMediaPropsGlobal[];
    color: ColorSocialMediaProps;
    help?: boolean;
}
