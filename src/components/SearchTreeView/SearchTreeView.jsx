import { useState } from 'react';
import { Search } from '../Search/Search';
import { Tree } from '../Tree/Tree';
import { mockResponse } from '../../helpers/mockData';
import { Div } from './SearchTreeView.styles';

export const SearchTreeView = () => {
  const [data, setData] = useState(mockResponse);
  const [filteredData, setFilteredData] = useState(mockResponse);

  const handleSearch = query => {
    const lowercaseQuery = query.toLowerCase();

    const filtered = data.filter(item => {
      const lowercaseName = item.name.toLowerCase();
      return lowercaseName.includes(lowercaseQuery);
    });

    setFilteredData(filtered);
  };

  return (
    <Div>
      <Search onSearch={handleSearch} />
      <Tree data={filteredData} />
    </Div>
  );
};
