import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PreguntasIndividuales from "./PreguntasIndividuales";
import Temporizador from "./Temporizador";

const PregutasPrincipal = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column vh-100 vw-100">
      <Card className="d-flex text-center shadow-lg rounded-4 my-5 w-50">
        <Card.Header>ENTREVISTANDO</Card.Header>
        <Card.Body>
          <Card.Title>Desarrollador junior en Java</Card.Title>
          <Card.Text>
            Por favor responde a las preguntas que veras en pantala en el tiempo
            convenido.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
            <Temporizador></Temporizador>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PregutasPrincipal;
