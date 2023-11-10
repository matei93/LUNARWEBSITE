// Import necessary modules and components

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NestedGallery.css";

// Sample data for the gallery
const galleryData = [
  {
    title: "Gallery 1",
    folder: "gallery1",
    coverPhoto: "D75_3713.jpg",
    images: ["D75_3713.jpg", "D75_3762.jpg", "D75_3815.jpg"],
  },
  {
    title: "Gallery 2",
    folder: "gallery2",
    coverPhoto: "D75_3833.jpg",
    images: ["D75_3833.jpg", "D75_3847.jpg", "D75_3859.jpg"],
  },
];

// Gallery component
// Gallery component
const NestedGallery = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  const handleGalleryClick = (galleryIndex) => {
    setActiveGallery(activeGallery === galleryIndex ? null : galleryIndex);
  };

  return (
    <Container>
      {galleryData.map((gallery, index) => (
        <div
          key={index}
          className={`gallery-container ${
            activeGallery === index ? "active" : ""
          }`}
        >
          <h2 onClick={() => handleGalleryClick(index)}>{gallery.title}</h2>
          {activeGallery === index ? (
            <>
              <Row>
                <Col md={12}>
                  <img
                    src={`/gallery/${gallery.folder}/${gallery.coverPhoto}`}
                    alt={`Gallery ${index + 1} Cover`}
                    className="cover-photo img-fluid"
                    onClick={() => handleGalleryClick(null)} // Clicking the cover photo hides all images
                  />
                </Col>
              </Row>
              <Row>
                {gallery.images.map((image, imageIndex) => (
                  <Col key={imageIndex} md={4}>
                    <img
                      src={`/gallery/${gallery.folder}/${image}`}
                      alt={`Gallery ${index + 1} Image ${imageIndex + 1}`}
                      className="img-fluid"
                    />
                  </Col>
                ))}
              </Row>
            </>
          ) : null}
        </div>
      ))}
    </Container>
  );
};

export default NestedGallery;
