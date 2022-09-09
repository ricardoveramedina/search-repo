import React, { useEffect, useState } from 'react';
import Repositories from './controller/Repositories';
import Main from './views/Main';
import { IPageNavigation } from './Interfaces/IPageNavigation';
import { IDataTableRepo } from './Interfaces/IDataTableRepo';
import './App.css';

const perPage = 10;
const repo = new Repositories(perPage);

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [rows, setRows] = useState<IDataTableRepo | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const callSearch = async (page: number, searchText: string) => {
    setLoading(true);
    const res: any = await repo.search(page, searchText, searchText);
    setRows(res);
    setLoading(false);
  };

  const searchHandler = (value: string) => {
    console.log('searching:', value);
    setSearchText(value);
  };

  const currentPageHandler = (value: IPageNavigation) => {
    //console.log('App currentPageHandler', value);
    let currentPage = page;
    if (value === IPageNavigation.NEXT) {
      currentPage = page + 1;
      setPage(currentPage);
      return currentPage;
    } else {
      currentPage = page - 1;
      setPage(currentPage);
      return currentPage;
    }
  };

  useEffect(() => {
    searchText.length > 0 ? callSearch(page, searchText) : setRows(undefined);
    return () => {};
  }, [page, searchText]);

  return (
    <Main
      rows={rows}
      currentPageHandler={currentPageHandler}
      loading={loading}
      searchHandler={searchHandler}
    />
  );
}

export default App;
