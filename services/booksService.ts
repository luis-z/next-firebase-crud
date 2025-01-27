import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { Book } from '@/types/book';
import { BOOKS_COLLECTION } from '@/constants/books';

const booksCollection = collection(db, BOOKS_COLLECTION);

// Create a new book
export const addBook = async (book: Omit<Book, 'id'>): Promise<void> => {
  await addDoc(booksCollection, book);
};

// Read all books
export const getBooks = async (): Promise<Book[]> => {
  const snapshot = await getDocs(booksCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Book));
};

// Update a book
export const updateBook = async (id: string, updatedBook: Omit<Book, 'id'>): Promise<void> => {
  const bookDoc = doc(db, 'books', id);
  await updateDoc(bookDoc, updatedBook);
};

// Delete a book
export const deleteBook = async (id: string): Promise<void> => {
  const bookDoc = doc(db, 'books', id);
  await deleteDoc(bookDoc);
};
