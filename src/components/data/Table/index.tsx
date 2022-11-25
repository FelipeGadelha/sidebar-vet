import React from 'react';

import { CustonTable } from './styles';

interface TableProps {
  titles: JSX.Element[],
  data: JSX.Element[]
}


export function Table({titles, data}: TableProps) {
  return (
    <CustonTable>
      <thead>
        <tr>
          {titles}
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </CustonTable>
  );
}

export default Table;