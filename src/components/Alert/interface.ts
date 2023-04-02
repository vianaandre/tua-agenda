import { StatusProps } from 'common/interface/StatusProps';
import React from 'react';

export type AlertProps = {
    status: StatusProps;
    message: React.ReactNode;
}
