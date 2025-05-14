import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ItemDetalle from "./ItemDetalle";
import imagen from "../img/img-como-funciona.png";
import "../../styles/Como-funciona.css";

const ComoFunciona = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="mb-4">Cómo Funciona</h1>
      <Row className="d-flex align-items-stretch p-4 gap-4">
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={imagen}
            alt="imagen ia"
            className="img-fluid rounded-4 shadow"
            id="img-como-funciona"
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div id="container-como-funciona" className="w-100">
            <ItemDetalle />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ComoFunciona;
