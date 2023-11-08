import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselFeature() {
  return (
    <Carousel
      className="carousel-container"
      fade
      hover={false}
      loop={true}
      data-bs-theme="dark"
    >
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3713.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3762.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className=" c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3815.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3821.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img className="c-img" src="/images/D75_3833.jpg" alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3847.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img className="c-img" src="/images/D75_3859.jpg" alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3876.jpg"
          alt="Eight slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3896.jpg"
          alt="Ninght slide"
        />
      </Carousel.Item>
      <Carousel.Item className="c-item" interval={2000}>
        <img
          className="c-img d-block w-100"
          src="/images/D75_3923.jpg"
          alt="Tenth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFeature;
