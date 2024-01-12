import { Input } from './Search.styles';

export const Search = ({ onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  return <Input type="text" placeholder="Search..." onChange={handleChange} />;
};
