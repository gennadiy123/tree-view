export const mockResponse = [
  {
    name: 'Folder 1',
    isFolder: true,
    children: [
      {
        name: 'Folder 1.1',
        isFolder: true,
        children: [
          {
            name: 'File 1.1',
            isFolder: false,
            children: [],
          },
          {
            name: 'File 2.1',
            isFolder: false,
            children: [],
          },
        ],
      },
      {
        name: 'File 1',
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    name: 'Folder 2',
    isFolder: true,
    children: [
      {
        name: 'File 2',
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    name: 'Folder 3',
    isFolder: true,
    children: [],
  },
  {
    name: 'File 3',
    isFolder: false,
    children: [],
  },
];
