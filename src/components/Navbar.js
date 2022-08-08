import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Powa Read List</h1>
      <p>You have {books.length} books to finish up..</p>
    </div>
  );
};

export default Navbar;
