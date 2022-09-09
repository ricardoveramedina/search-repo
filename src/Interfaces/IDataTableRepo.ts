export interface IDataTableRepo {
  total: number;
  items: [
    {
      id: number;
      name: string | null;
      owner: string | null;
      description: string | null;
      rate: number;
    }
  ];
}
