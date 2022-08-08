import { createContext } from "react";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    { name: "The Gods must be crazy", author: "Malcom X", id: 1 },
    { name: "Harry Potter", authour: "John Snow", id: 2 },
    { name: "God of war", author: "Sam Andy", id: 3 },
  ]);
  const addBook = (title, author) => {
    setBook([...books, { title, author, id: uuidv1() }]);
  };

  const removeBook = (id) => {
    books.filter((book) => book.id !== id);
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
