import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img className="d-block w-100" src="Hero.png" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="Hero.png" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="Hero.png" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HomeCarousel;



/*import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>

        <Carousel.Item>
            <img className="d-block w-100" src="Hero.png" alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src="Hero.png" alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src="Hero.png" alt="Third slide" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>

  );
}

export default HomeCarousel;*/