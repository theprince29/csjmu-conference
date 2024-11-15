import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const LazyImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
    loading="lazy" 
  />
);

const Gallery = () => {
  const images = [
    "https://csjmu.ac.in/wp-content/uploads/2024/10/intl-conference.jpg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-5.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2024/08/nepal-irac.jpg",
    "https://csjmu.ac.in/wp-content/uploads/2024/08/spain-irac.jpg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-3.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-1-1536x1061.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-8-1536x1155.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-alumni-meet-9-1536x1155.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/uiet-seminars-2.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/g58.jpeg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-8.jpeg",
    "https://csjmu.ac.in/wp-content/uploads/2021/06/g52.jpeg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-2.jpeg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-7.jpeg",
    "https://csjmu.ac.in/wp-content/themes/csjmutheme/imgs-copyrighted/imgsirac/irac-1.jpeg",
  ];

  const [visibleImages, setVisibleImages] = useState(9);

  const loadMoreImages = () => setVisibleImages((prev) => (prev >= 18 ? prev / 2 : prev + 9));

  return (
    <div className="max-w-6xl mx-auto p-4 mt-4">
      <Helmet>
        <title>Gallery - ICRAECCT'2025 Conference</title>
        <meta
          name="description"
          content="Explore the gallery of ICRAECCT 2025, showcasing images from conferences, seminars, and events like the UIET alumni meet and international IRAC sessions."
        />
        <meta
          name="keywords"
          content="ICRAECCT 2025, gallery, conference images, IRAC sessions, alumni meet, seminars, university events"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://csjmu-conference.vercel.app/gallery" />
      </Helmet>

      <h1 className="text-4xl font-bold text-center text-third mb-8">
        GALLERY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <LazyImage src={image} alt={`Gallery Image ${index + 1} from ICRAECCT 2025 gallery`} />
          </div>
        ))}
      </div>

      <button
        onClick={loadMoreImages}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        {visibleImages > 9 ?"Show less" :"Show More"}
      </button>
    </div>
  );
};

export default Gallery;
