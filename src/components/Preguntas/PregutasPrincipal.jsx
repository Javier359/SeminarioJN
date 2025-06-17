import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import PreguntasIndividuales from "./PreguntasIndividuales";


const PregutasPrincipal = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column vh-100 vw-100">
      <Card className="d-flex text-center shadow-lg rounded-4 my-5 w-50">
        <Card.Header>ENTREVISTANDO</Card.Header>
        <Card.Body>
          <Card.Title>Desarrollador junior en Java</Card.Title>
          <Card.Text>
            Por favor darle permisos al micrófono en "Si acepto" para continuar con la entrevista.
            Exitos!
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
            
        </Card.Footer>
      </Card>
      <PreguntasIndividuales />
    </Container>
  );
};

export default PregutasPrincipal;
