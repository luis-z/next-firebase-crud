import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-4rem)] bg-background flex flex-col items-center justify-center text-center">
      {/* Welcome Section */}
      <h1 className="text-5xl font-extrabold text-primary mb-6">
        Next.js Firebase CRUD App
      </h1>
      <p className="text-gray-700 text-lg max-w-3xl mb-8">
        This application is a demonstration of a full-stack CRUD implementation
        using modern web technologies. Explore the features, manage books, and learn how
        this stack works.
      </p>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <Link
          href="/books"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Go to Books CRUD
        </Link>
        <a
          href="https://github.com/luis-z/next-firebase-crud"
          target="_blank"
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      {/* Stack Section */}
      <div className="mt-12 max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Tech Stack and Versions
        </h2>
        <ul className="text-gray-700 text-lg space-y-4">
          <li>
            <strong>Next.js:</strong> 15.1.6
          </li>
          <li>
            <strong>React:</strong> 19.0.0
          </li>
          <li>
            <strong>Firebase:</strong> 11.2.0
          </li>
          <li>
            <strong>Tailwind CSS:</strong> 3.4.1
          </li>
          <li>
            <strong>TypeScript:</strong> 5.0.0
          </li>
          <li>
            <strong>Node.js:</strong> 20.18.1
          </li>
        </ul>
      </div>
    </div>
  );
}
