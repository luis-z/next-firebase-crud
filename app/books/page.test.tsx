import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BooksPage from '@/app/books/page';
import { getBooks } from '@/services/booksService';

// Mock getBooks
jest.mock('../../services/booksService', () => ({
  getBooks: jest.fn(),
}));

describe("BooksPage", () => {
  it("renders loading state initially", async () => {
    (getBooks as jest.Mock).mockResolvedValue([]); // Mock an empty response

    render(<BooksPage />);

    // Assert that the loading message is displayed
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // Wait for loading to finish
    await waitFor(() => expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument());
  });

  it("renders books when fetched", async () => {
    const mockBooks = [
      { id: "1", title: "Book 1", author: "Author 1" },
      { id: "2", title: "Book 2", author: "Author 2" },
    ];

    (getBooks as jest.Mock).mockResolvedValue(mockBooks);

    render(<BooksPage />);

    // Wait for books to load
    await waitFor(() => {
      expect(screen.getByText(/book 1/i)).toBeInTheDocument();
      expect(screen.getByText(/book 2/i)).toBeInTheDocument();
    });
  });

  it("renders 'No books found' when no books are available", async () => {
    (getBooks as jest.Mock).mockResolvedValue([]); // Mock an empty response

    render(<BooksPage />);

    // Wait for "No books found" to appear
    await waitFor(() => {
      expect(screen.getByText(/no books found/i)).toBeInTheDocument();
    });
  });
});
