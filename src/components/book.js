import React from 'react';

function Book({ title, author, description, image, link }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
      <img src={image} alt={title} />
      <a href={link} target="_blank" rel="noopener noreferrer">View on Google Books</a>
    </div>
  );
}

export default Book;
