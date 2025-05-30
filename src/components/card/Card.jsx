import React, { useState } from "react";
import { Circles } from 'react-loader-spinner'; // Importing the loader

import "./Card.css";

const Card = ({ images, title, desc }) => {
  const [isLoading, setIsLoading] = useState(true); // State to track image loading

  // Function to handle when the image has loaded
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8">
      {isLoading && (
        <div className="flex justify-center items-center h-48 w-full">
          <Circles
            height="50"
            width="50"
            color="grey"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}
      <img
        className="rounded-t-lg h-48 w-full object-cover"
        src={images}
        alt={title}
        onLoad={handleImageLoad} // Image loaded, remove loader
        style={{ display: isLoading ? "none" : "block" }} // Hide image until loaded
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="card-desc mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 text-justify">
          {desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-third focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
