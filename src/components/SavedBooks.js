import React from 'react';

function SavedBooks({ books }) {
  return (
    <div className="saved-books">
      <h2>Saved Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <img src={book.image} alt={book.title} />
            <a href={book.link} target="_blank" rel="noopener noreferrer">View on Google Books</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedBooks;
