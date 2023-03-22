import { UseFieldArrayRemove } from 'react-hook-form';

export interface HoursProps {
    fields: Record<'id', string>[];
    onRemove: UseFieldArrayRemove;
}
