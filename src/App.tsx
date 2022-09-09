import { useEffect, useState } from 'react';
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
  const [movingPage, setMovingPage] = useState<boolean>(false);

  const callSearch = async (currentPage: number, searchText: string) => {
    setLoading(true);
    const res: any = await repo.search(currentPage, searchText, searchText);
    setRows(res);
    setLoading(false);
  };

  const callNextPage = async (page: number) => {
    setLoading(true);
    const res: any = await repo.search(page, searchText, searchText);
    setRows(res);
    setLoading(false);
  };

  const searchHandler = (value: string) => setSearchText(value);

  const currentPageHandler = (value: IPageNavigation) => {
    let currentPage = page;
    if (value === IPageNavigation.NEXT) {
      currentPage = page + 1;
      setMovingPage(true);
      setPage(currentPage);
      return currentPage;
    } else {
      currentPage = page - 1;
      setMovingPage(true);
      setPage(currentPage);
      return currentPage;
    }
  };

  useEffect(() => {
    setPage(1);
    if (searchText.length > 0) {
      callSearch(1, searchText);
    } else {
      setRows(undefined);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    searchText.length > 0 && movingPage && callNextPage(page);
    setMovingPage(false);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, movingPage]);

  return (
    <Main
      rows={rows}
      page={page}
      currentPageHandler={currentPageHandler}
      loading={loading}
      searchHandler={searchHandler}
    />
  );
}

export default App;
