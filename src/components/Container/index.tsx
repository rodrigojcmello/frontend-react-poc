import React, { ReactElement } from 'react';
import twcss from '../../utils/style';
import { ContainerProps } from './types';

function Container({ children }: ContainerProps): ReactElement {
  return (
    <div className={twcss(['max-w-screen-md', 'mx-auto', 'pr-4', 'pl-4'])}>
      {children}
    </div>
  );
}

export default Container;
