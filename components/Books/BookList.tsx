import React from 'react';
import { Book } from '@/types/book';
import Card from '@/components/Shared/Card';
import EditButton from '@/components/Shared/Button';

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <Card key={book.id} className="card-flex">
          <div>
            <p className="text-lg font-bold text-gray-800">{book.title}</p>
            <p className="text-sm text-gray-600">by {book.author}</p>
          </div>
          <div className="flex space-x-2">
            <EditButton
              onClick={() => onEdit(book)}
              className="button-primary"
            >
              Edit
            </EditButton>
            <EditButton
              onClick={() => book.id && onDelete(book.id)}
              className="button-danger"
            >
              Delete
            </EditButton>
          </div>
        </Card>
      ))}
    </ul>
  );
};

export default BookList;
