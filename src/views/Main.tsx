import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import DataTable from '../components/molecules/DataTable';
import { IDataTableRepo } from '../Interfaces/IDataTableRepo';
import './styles.css';

interface MainProps {
  rows: IDataTableRepo[];
  columnsDefinition: GridColDef[];
}

export default function Main({ rows, columnsDefinition }: MainProps) {
  return (
    <div className="main">
      Search a github Repository
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataTable rows={rows} columnsDefinition={columnsDefinition} />
        </div>
      </div>
    </div>
  );
}
