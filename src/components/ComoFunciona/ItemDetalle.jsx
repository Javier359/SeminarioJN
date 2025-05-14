import React from "react";
import { ListGroup } from "react-bootstrap";

const ItemDetalle = () => {
  return (
    <ListGroup as="ol" numbered className="my-4">
      <ListGroup.Item as="li" className="p-3 mb-3">
        Indique el Puesto al que quiere aplicar: "Ej. Desarrollador Junior Java"
      </ListGroup.Item>
      <ListGroup.Item as="li" className="p-3 mb-3">
        Simulación Real: La inteligencia artificial se encarga de recopilar una
        serie de preguntas para el puesto idnicado
      </ListGroup.Item>
      <ListGroup.Item as="li" className="p-3 mb-3">
        Analisis: La inteligencia artificial analiza tus expresiones vocales (Tú
        voz en profundidad-Contenido de tu respuesta-Aspectos psicologicos). Es
        decir que no solo analiza lo que dices, sino también como lo dices.
      </ListGroup.Item>
      <ListGroup.Item as="li" className="p-3">
        Feedback: Con todos los datos analizados y recopilados, la IA realiza un
        reporte para que puedas analizar tus fortalezas y debilidades a la hora
        de expresarte en una etrevista laboral.
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ItemDetalle;
