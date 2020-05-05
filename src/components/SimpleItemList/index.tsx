import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import twcss from '../../utils/style';
import { SimpleItemListProps } from './types';

function SimpleItemList({ text }: SimpleItemListProps): ReactElement {
  return (
    <li className={twcss(['border-t', 'p-2'])}>
      <Link
        className={twcss(['underline', 'block', 'text-blue-600'])}
        to={`/fetch-breed/${text}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default SimpleItemList;
