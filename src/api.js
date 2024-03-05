export const getSavedBooks = async () => {
    try {
      // Perform fetch or Axios request to the server endpoint
      const response = await fetch('/api/books');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching saved books:', error.message);
      return [];
    }
  };
  
  export const saveBook = async (bookData) => {
    try {
      // Perform fetch or Axios request to the server endpoint
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error saving book:', error.message);
      return null;
    }
  };

  export const removeBook = async (bookId) => {
    try {
      // Perform fetch or Axios request to the server endpoint
      const response = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error removing book:', error.message);
      return null;
    }
  };
  