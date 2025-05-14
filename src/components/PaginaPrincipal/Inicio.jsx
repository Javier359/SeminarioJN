import { Button, Card } from "react-bootstrap";
import "../../styles/Principal.css";

const Inicio = () => {
  return (
   
    <Card className="text-center container shadow-lg rounded-4 my-5">
      <Card.Body className="card-fondo">
        <Card.Title>JobLift</Card.Title>
        <Card.Text>
          ¿Listo para poner a prueba tus habilidades? Responde preguntas como
          una entrevista real, recibe feedback inteligente y descubre cómo
          mejorar...
        </Card.Text>
        <Button variant="success" className="w-auto mx-auto mt-3">
          Comenzar
        </Button>
      </Card.Body>
    </Card>
  );
};
export default Inicio;
