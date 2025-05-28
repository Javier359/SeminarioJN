import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/Como-funciona.css";

function UncontrolledExample() {
  return (
    <Carousel className="my-5" style={{ width: "100%" }}>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/Portada-que-es-una-entrevista-2.jpg"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className="text-dark bg-light bg-opacity-75">
          <h3>1.- Indicar el Puesto</h3>
          <p>
            Indique el Puesto al que quiera aplicar. "Ej. Desarrollador Java
            Junior"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/Guia-entrevistas.jpg"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className="text-dark bg-light bg-opacity-75">
          <h3>2.- Simulación Real:</h3>
          <p>
            La inteligencia artificial se encarga de recopilar una serie de
            preguntas para el puesto indicado
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/entrevista-de-seleccion-1.jpg"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className="text-dark bg-light bg-opacity-75">
          <h3>3.- Análisis:</h3>
          <p>
            La inteligencia artificial analiza tus expresiones vocales (Tú voz
            en profundidad-Contenido de tu respuesta-Aspectos psicologicos). Es
            decir que no solo analiza lo que dices, sino también como lo dices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/Imagenes-entrevistas/entrevista-3.jpg"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className="text-dark bg-light bg-opacity-75">
          <h3>4.- Feedback:</h3>
          <p>
            Con todos los datos analizados y recopilados, la IA realiza un
            reporte para que puedas analizar tus fortalezas y debilidades a la
            hora de expresarte en una etrevista laboral.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
