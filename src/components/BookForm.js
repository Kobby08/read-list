import { useState } from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleAddBook(e) {
    console.log(title, author);
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  }
  return (
    <form onSubmit={handleAddBook}>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title.."
      />
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author name..."
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default BookForm;
