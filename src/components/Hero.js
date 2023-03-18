import {Carousel} from 'react-bootstrap'
import hero1 from './../assets/school2.jpg'
import hero2 from './../assets/school1.jpeg'
import hero3 from './../assets/sekolah3.jpg'
function Hero(){
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero2}
            alt="Second slide"
          />
  
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={hero3}
            alt="Third slide"
          />
  

        </Carousel.Item>
      </Carousel>
    );
}
export default Hero