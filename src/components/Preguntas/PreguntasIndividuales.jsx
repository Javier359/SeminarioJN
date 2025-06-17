import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaMicrophone } from "react-icons/fa";
import GrabadorAudio from "./GrabadorAudio";
import Temporizador from "./Temporizador";
import { useRef } from "react";
import "../../styles/grabador.css";

const PreguntasIndividuales = () => {
  const grabadorRef = useRef();
  const temporizadorRef = useRef();

  const detenerEntrevista = () => {
    if (grabadorRef.current) grabadorRef.current.detenerGrabacion();
    if (temporizadorRef.current) temporizadorRef.current.detenerTemporizador();
  };

  return (
    <Card className="text-center shadow-lg rounded-4 my-5 w-100">
      <Card.Header>Test</Card.Header>
      <Card.Body>
        <Card.Title>
          <h2>Pregunta número 1 de 10</h2>
        </Card.Title>
        <Card.Text>
          <h4>
            ¿Cuáles son las principales características de Java y cómo se
            diferencian de otros lenguajes de programación?
          </h4>
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <FaMicrophone
            size={48}
            color="red"
            className="microfono-animado"
            title="Grabando..."
          />
          <Button variant="danger" onClick={detenerEntrevista}>
            Detener
          </Button>
        </div>
        <div className="mt-3">
          <Temporizador ref={temporizadorRef} />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
      <GrabadorAudio ref={grabadorRef} />
    </Card>
  );
};

export default PreguntasIndividuales;
