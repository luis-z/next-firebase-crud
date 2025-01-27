import React, { useState } from 'react';
import { Book } from '@/types/book';
import SubmitButton from '@/components/Shared/Button';

interface BookFormProps {
  book: Omit<Book, 'id'>;
  setBook: React.Dispatch<React.SetStateAction<Omit<Book, 'id'>>>;
  onSubmit: () => void;
  isEditing?: boolean;
}

const BookForm: React.FC<BookFormProps> = ({ book, setBook, onSubmit, isEditing }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    await onSubmit();

    setIsSubmitting(false);
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500"
      />
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500"
      />
      <SubmitButton
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={isSubmitting ? "bg-gray-400 cursor-not-allowed" : "button-primary"}
      >
        {isEditing ? "Save Changes" : "Add Book"}
      </SubmitButton>
    </form>
  );
};


export default BookForm;
