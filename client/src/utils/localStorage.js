export const getSavedBookIds = () => {
  const savedBookIds = localStorage.getItem('saved_book')
    ? JSON.parse(localStorage.getItem('saved_book'))
    : [];

  return savedBookIds;
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem('saved_book', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_book');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem('saved_book')
    ? JSON.parse(localStorage.getItem('saved_book'))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_book', JSON.stringify(updatedSavedBookIds));

  return true;
};
