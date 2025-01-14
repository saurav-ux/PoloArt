import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Img1 from './bath1.jpg'
import Img2 from './bath2.jpg'
import Img3 from './bath3.jpg'
import './Carousell.css';

function UncontrolledExample() {
  return (
    <Carousel style={{marginTop:'6em'}}>
      <Carousel.Item>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <img src={Img1 } style={{width:'100%' , height:'auto'}} alt='img1'/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
         <img src={Img2 } style={{width:'100%' , height:'auto'}} alt='img2'/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
               <img src={Img3 } style={{width:'100%' , height:'auto'}} alt='img3'/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;