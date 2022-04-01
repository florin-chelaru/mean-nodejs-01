import React, {useEffect, useState} from 'react';
import Book from "../models/Book";
import BookItem from "../components/BookItem";
import {Navigate} from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedBooks, setLoadedBooks] = useState<Book[]>([]);
  const [error, setError] = useState<boolean>(false);

  const getBooks = async (): Promise<Book[]> => {
    const response = await fetch('https://api.bunny.com:3000/books',
      {
        credentials: "include",
        headers: {'Content-Type': 'application/json'},
      });
    if (response.ok) {
      const books: Book[] = await response.json();
      return books;
    } else {
      setError(true);
      return [];
    }
  }

  useEffect(() => {
      setIsLoading(true);
      getBooks().then((books) => {
        setIsLoading(false);
        if (!error) {
          setLoadedBooks(books);
        }
      });
    },
    // only execute when the below dependencies change. and since there's no dependency, it only executes once.
    []);

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>;
  }

  if (error) {
    return <Navigate to='/login'/>;
  }

  return (
    <section>
      <div className="container">
        {loadedBooks.map(book => <BookItem book={book} key={book.id}/>)}
      </div>
    </section>
  );
};

export default Home;