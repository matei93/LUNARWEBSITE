// Import necessary modules and components
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { storage } from "../../firebase/config";
import "./NestedGallery.css";

const NestedGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const snapshot = await storage.collection("galleryData").get();
        const data = snapshot.docs.map((doc) => doc.data());
        setGalleryData(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, []);

  const handleGalleryClick = (galleryIndex) => {
    setActiveImageIndex(null);
    setActiveGallery(activeGallery === galleryIndex ? null : galleryIndex);
  };

  const handleImageClick = (imageIndex) => {
    setActiveImageIndex(imageIndex);
  };

  const handleCloseCarousel = () => {
    setActiveImageIndex(null);
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
              <img
                src={`/gallery/${gallery.folder}/${gallery.coverImage}`}
                alt={`Gallery ${index + 1} Cover`}
                className="gallery-cover img-fluid"
                onClick={() => handleGalleryClick(null)}
              />
              <Row>
                {gallery.images.map((image, imageIndex) => (
                  <Col key={imageIndex} md={4}>
                    <img
                      src={`/gallery/${gallery.folder}/${image}`}
                      alt={`Gallery ${index + 1} Image ${imageIndex + 1}`}
                      className="img-fluid"
                      onClick={() => handleImageClick(imageIndex)}
                    />
                  </Col>
                ))}
              </Row>
              {activeImageIndex !== null && (
                <Carousel
                  activeIndex={activeImageIndex}
                  onSelect={(selectedIndex) =>
                    setActiveImageIndex(selectedIndex)
                  }
                  interval={null}
                >
                  {gallery.images.map((image, imageIndex) => (
                    <Carousel.Item key={imageIndex}>
                      <img
                        src={`/gallery/${gallery.folder}/${image}`}
                        alt={`Gallery ${index + 1} Image ${imageIndex + 1}`}
                        className="img-fluid"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
            </>
          ) : null}
        </div>
      ))}
    </Container>
  );
};

export default NestedGallery;
