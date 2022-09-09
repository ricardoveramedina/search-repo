import React from 'react';
import DataTable from '../components/molecules/DataTable';
import { IDataTableRepo } from '../Interfaces/IDataTableRepo';
import SearchBar from '../components/atoms/SearchBar';
import './styles.css';

interface MainProps {
  rows: IDataTableRepo | undefined;
  currentPageHandler: Function;
  searchHandler: Function;
  loading: boolean;
}

export default function Main({
  rows,
  currentPageHandler,
  searchHandler,
  loading,
}: MainProps) {
  return (
    <div className="main">
      Search a github Repository
      <SearchBar searchHandler={searchHandler} />
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataTable
            rows={rows}
            currentPageHandler={currentPageHandler}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
