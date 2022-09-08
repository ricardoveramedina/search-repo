import React, { useEffect, useState } from 'react';
import Repositories from './controller/Repositories';
import Main from './views/Main';
import { repoColumns } from './components/molecules/DataTable/repoColumns';
import { IDataTableRepo } from './Interfaces/IDataTableRepo';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const repo = new Repositories();

function App() {
  const [rows, setRows] = useState<IDataTableRepo[] | []>([]);
  const response = async () => {
    const res: any = await repo.search('vs code', 'VS code');
    setRows(res);
    return res;
  };

  useEffect(() => {
    console.log('use effect');
    response();
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Main rows={rows} columnsDefinition={repoColumns} />
    </ThemeProvider>
  );

  /*   return (
    <div className="App">
      <div className="main">
        <div style={{ flexGrow: 1 }}>
          <Main rows={rows} columnsDefinition={repoColumns} />
        </div>
      </div>
    </div>
  ); */
}

export default App;
