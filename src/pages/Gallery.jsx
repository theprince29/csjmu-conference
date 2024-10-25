import React from 'react'

const Gallery = () => {
    const images = [
        'https://csjmu.ac.in/wp-content/uploads/2024/10/intl-conference.jpg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-1-1536x1061.jpeg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-8-1536x1155.jpeg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-9-1536x1155.jpeg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-seminars-2.jpeg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/g58.jpeg',
        'https://csjmu.ac.in/wp-content/uploads/2021/06/g52.jpeg',
      ];
  return (
    <div className="max-w-6xl mx-auto p-4 mt-4">
    <h1 className="text-4xl font-bold text-center text-third mb-8">
        GALLERY
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Gallery
