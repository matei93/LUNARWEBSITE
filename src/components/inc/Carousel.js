import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { database } from "../../firebase/config";

function CarouselFeature() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Reference to the 'images' node in your Firebase Realtime Database
    const imagesRef = database.ref("images");

    // Fetch image URLs from the database
    imagesRef
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert the object of image URLs into an array
          const urls = Object.values(data);
          setImageUrls(urls);
        }
      })
      .catch((error) => {
        console.error("Error fetching images from Firebase Database:", error);
      });
  }, []);

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={url}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselFeature;
