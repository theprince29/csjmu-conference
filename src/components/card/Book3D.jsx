import React from "react";
import "./Book.css";


const Book3D = ({ coverImage, altText }) => {
    return (
      <div className="book-container">
        <div className="book-3d">
          <div className="book-3d__inner">
            {/* Book Pages */}
            <div className="book-3d__pages"></div>
            
            {/* Rear Cover */}
            <div className="book-3d__rear-cover"></div>
            
            {/* Book Cover */}
            <img className="book-3d__cover" src={coverImage} alt={altText} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Book3D;
