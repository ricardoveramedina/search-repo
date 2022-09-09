import React from 'react';
import DataTable from '../components/molecules/DataTable';
import { IDataTableRepo } from '../Interfaces/IDataTableRepo';
import SearchBar from '../components/atoms/SearchBar';
import './styles.css';

interface MainProps {
  rows: IDataTableRepo | undefined;
  page: number;
  currentPageHandler: Function;
  searchHandler: Function;
  loading: boolean;
}

export default function Main({
  rows,
  page,
  currentPageHandler,
  searchHandler,
  loading,
}: MainProps) {
  return (
    <div className="main">
      Search a github Repository
      <SearchBar searchHandler={searchHandler} />
      <DataTable
        rows={rows}
        page={page}
        currentPageHandler={currentPageHandler}
        loading={loading}
      />
    </div>
  );
}
