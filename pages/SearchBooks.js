import React, { useState, useEffect } from 'react';
import SavedBooks from '../components/SavedBooks';
import { getSavedBooks } from '../utils/api';

function SavedBooksPage() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const books = await getSavedBooks();
      setSavedBooks(books);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Saved Books</h1>
      <SavedBooks books={savedBooks} />
    </div>
  );
}

export default SavedBooksPage;
