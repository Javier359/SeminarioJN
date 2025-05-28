import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import imagen1 from "../../../public/Imagenes-entrevistas/Portada-tipos-de-entrevistas.jpg";
import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/Portada-que-es-una-entrevista-2.jpg"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/Portada-tipos-de-entrevistas.jpg"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/entrevista-de-seleccion-1.jpg"
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
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

export default UncontrolledExample;
