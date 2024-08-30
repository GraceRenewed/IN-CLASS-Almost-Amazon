// for merged promises
// import { getSingleBook } from './bookData';
import { deleteSingleAuthor, getSingleAuthor } from './authorData';

// // Get data for viewBook
// const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
// // GET SINGLE BOOK
//   getSingleBook(firebaseKey).then((bookObject) => { // returns single book
//     getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
//       .then((authorObject) => resolve({ ...bookObject, authorObject }));
//   }).catch(reject);
// // GET AUTHOR
// // Create an object that has book data and an object named authorObject
// });

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBookPromises(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

// export {
//   getBookDetails,
//   deleteAuthorBooksRelationship
// };
