import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/molecules/DataTable';
//import { repoColumns } from '../../components/molecules/DataTable/repoColumns';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DataTable',
  component: DataTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DataTable>;

const githubRows = [
  {
    id: 41881900,
    name: 'vscode',
    owner: 'microsoft',
  },
];

const repoColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'owner', headerName: 'Owner', width: 130 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columnsDefinition = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args: any) => (
  <DataTable {...args} />
);
/* 
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  rows,
  columnsDefinition,
}; */

export const GithubData = Template.bind({});
GithubData.args = {
  rows: githubRows,
  columnsDefinition: repoColumns,
};
