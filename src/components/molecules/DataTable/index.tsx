import { useState, useEffect, useCallback } from 'react';
import NavigationButton from '../../atoms/NavigationButton';
import { ButtonDirection } from '../../atoms/NavigationButton';
import { IDataTableRepo } from '../../../Interfaces/IDataTableRepo';
import { IPageNavigation } from '../../../Interfaces/IPageNavigation';
import styles from './dataTable.module.scss';

interface DataTableProps {
  rows: IDataTableRepo | undefined;
  currentPageHandler: Function;
  loading: boolean;
}

export default function DataTable({
  rows,
  currentPageHandler,
  loading,
}: DataTableProps) {
  const [backIsDisabled, setBackIsDisabled] = useState<boolean>(false);
  const [nextIsDisabled, setNextIsDisabled] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleClick = (navigator: IPageNavigation) => {
    const currentPage = currentPageHandler(navigator);
    console.log('DataTable:', currentPage);
    setPage(currentPage);
  };

  const buttonsStatus = useCallback(() => {
    if (page === 1) {
      setBackIsDisabled(true);
    } else {
      setBackIsDisabled(false);
    }
    if (page === (rows && Math.ceil(rows.total / 10))) {
      setNextIsDisabled(true);
    } else {
      setNextIsDisabled(false);
    }
  }, [page, rows]);

  useEffect(() => {
    if (loading) {
      setBackIsDisabled(true);
      setNextIsDisabled(true);
    } else {
      buttonsStatus();
    }
  }, [buttonsStatus, loading]);

  useEffect(() => {
    console.log('page', page);
    buttonsStatus();
  }, [buttonsStatus, page, rows]);

  return (
    <div className={styles.main}>
      <table id="table_id">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.items.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.owner}</td>
                <td>{data.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>Total: {rows && rows.total}</div>
      <div>
        Page: {page} of {rows && Math.ceil(rows.total / 10)}
        <NavigationButton
          variant={ButtonDirection.LEFT}
          handleClick={() => handleClick(IPageNavigation.BACK)}
          disabled={backIsDisabled}
        />
        <NavigationButton
          variant={ButtonDirection.RIGHT}
          handleClick={() => handleClick(IPageNavigation.NEXT)}
          disabled={nextIsDisabled}
        />
      </div>
    </div>
  );
}
