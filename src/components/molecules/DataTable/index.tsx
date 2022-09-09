import { useState, useEffect, useCallback } from 'react';
import NavigationButton from '../../atoms/NavigationButton';
import { ButtonDirection } from '../../atoms/NavigationButton';
import { IDataTableRepo } from '../../../Interfaces/IDataTableRepo';
import { IPageNavigation } from '../../../Interfaces/IPageNavigation';
import loadingGif from '../../../assets/spinning-loading.gif';
import styles from './dataTable.module.scss';

interface DataTableProps {
  rows: IDataTableRepo | undefined;
  page: number;
  currentPageHandler: Function;
  loading: boolean;
}

export default function DataTable({
  rows,
  page,
  currentPageHandler,
  loading,
}: DataTableProps) {
  const [backIsDisabled, setBackIsDisabled] = useState<boolean>(false);
  const [nextIsDisabled, setNextIsDisabled] = useState<boolean>(false);

  const handleClick = (navigator: IPageNavigation) =>
    currentPageHandler(navigator);

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
    if (rows === undefined || rows.total === 0) {
      setBackIsDisabled(true);
      setNextIsDisabled(true);
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
    buttonsStatus();
  }, [buttonsStatus, page, rows]);

  return (
    <div className={`${styles.main} ${loading && styles.disable}`}>
      {loading && (
        <img src={loadingGif} alt="loading" className={styles.loading} />
      )}
      <table id="table_id">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Description</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.items.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.owner}</td>
                <td>{data.description?.substring(0, 30)}...</td>
                <td>{data.rate}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className={styles.container}>
        <div>
          Page: {page} of {rows ? Math.ceil(rows.total / 10) : 1}
        </div>
        <div>Total: {rows ? rows.total : 0}</div>
        <div className={styles.buttons}>
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
    </div>
  );
}
