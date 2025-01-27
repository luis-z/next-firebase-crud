'use client';
import { useEffect, useState } from 'react';
import { addBook, getBooks, updateBook, deleteBook } from '@/services/booksService';
import BookList from '@/components/Books/BookList';
import BookForm from '@/components/Books/BookForm';
import { Book } from '@/types/book';

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({ title: '', author: '' });
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    const fetchedBooks = await getBooks();
    setBooks(fetchedBooks);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddBook = async () => {
    if (newBook.title && newBook.author) {
      setIsLoading(true);
      await addBook(newBook);
      setNewBook({ title: '', author: '' });
      await fetchBooks();
    }
  };

  const handleEditBook = async () => {
    if (editingBook && editingBook.title && editingBook.author) {
      setIsLoading(true);
      await updateBook(editingBook.id!, editingBook);
      setEditingBook(null);
      await fetchBooks();
    }
  };

  const handleDeleteBook = async (id: string) => {
    setIsLoading(true);
    await deleteBook(id);
    await fetchBooks();
  };

  return (
    <div className="bg-background min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Books CRUD</h1>

        {/* Add/Edit Book Form */}
        <div className="mb-6 bg-white p-4 shadow-md rounded-md">
          {editingBook ? (
            <BookForm
              book={editingBook}
              setBook={(updatedBook) =>
                setEditingBook({ ...editingBook, ...updatedBook })
              }
              onSubmit={handleEditBook}
              isEditing
            />
          ) : (
            <BookForm
              book={newBook}
              setBook={setNewBook}
              onSubmit={handleAddBook}
            />
          )}
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : books.length > 0 ? (
          <BookList
            books={books}
            onEdit={setEditingBook}
            onDelete={handleDeleteBook}
          />
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
