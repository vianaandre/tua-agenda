import { CountryProps } from 'common/interface/CountryProps';
import { OptionSelectProps } from 'common/interface/OptionSelectProps';

export interface InputPhoneProps {
    options: OptionSelectProps<string, string>[];
    countrys: CountryProps[];
}
