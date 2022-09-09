import React, { useEffect, useState } from 'react';
import styles from './searchBar.module.scss';

type SearchBarProps = {
  searchHandler: Function;
};

export default function SearchBar({ searchHandler }: SearchBarProps) {
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState<string>('');
  const handleChange = (event: any) => {
    setText(event.target.value);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  useEffect(() => {
    if (!isTyping) {
      searchHandler(text);
    }
  }, [isTyping, searchHandler, text]);

  return (
    <input
      type="text"
      placeholder="search"
      id="name"
      className={styles.search}
      onChange={handleChange}
    />
  );
}
