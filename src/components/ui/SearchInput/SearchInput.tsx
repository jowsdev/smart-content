import React, { type InputHTMLAttributes } from 'react';
import { Input } from '../Input';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

/**
 * Specialized input for search functionality
 */
const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...props }) => {
  return (
    <Input
      type="search"
      placeholder="Search..."
      onChange={(e) => onSearch?.(e.target.value)}
      {...props}
    />
  );
};

export default SearchInput;
