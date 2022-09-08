import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IDataTableRepo } from '../../../Interfaces/IDataTableRepo';
import styles from './dataTable.module.scss';
/* 
interface Person {
  id: number;
  lastName: string;
  firstName: string | null;
  age: number | null;
}

interface GithubRepo {
  id: number;
  name: string;
  owner: string | null;
} */

interface DataTableProps {
  rows: IDataTableRepo[];
  columnsDefinition: GridColDef[];
}

export default function DataTable({ rows, columnsDefinition }: DataTableProps) {
  return (
    <div className={styles.main}>
      {rows && (
        <DataGrid
          rows={rows}
          columns={columnsDefinition}
          pageSize={500}
          rowsPerPageOptions={[5]}
        />
      )}
    </div>
  );
}
