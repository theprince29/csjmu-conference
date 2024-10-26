import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-white bg-third hover:bg-blue-600 rounded-md shadow-md transition duration-300"
      >
        Go Back Home
      </a>
    </div>
  )
}

export default NotFound
