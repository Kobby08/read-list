import { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: "The Gods must be crazy", author: "Malcom X", id: 1 },
    { title: "Harry Potter", authour: "John Snow", id: 2 },
    { title: "God of war", author: "Sam Andy", id: 3 },
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
