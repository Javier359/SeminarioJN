import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const limite = 20 * 60; // 20 minutos en segundos

  useEffect(() => {
    let intervalo;
    if (activo && segundos < limite) {
      intervalo = setInterval(() => {
        setSegundos(prev => prev + 1);
      }, 1000);
    } else if (segundos >= limite) {
      setActivo(false);
    }
    return () => clearInterval(intervalo);
  }, [activo, segundos]);

  const iniciar = () => {
    setActivo(true);
    setIniciado(true);
  };

  const reiniciar = () => {
    setSegundos(0);
    setActivo(false);
    setIniciado(false);
  };

  const formatoTiempo = (seg) => {
    const minutos = Math.floor(seg / 60);
    const segundos = seg % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

    return (
     <div className="d-flex justify-content-center align-items-center rounded-4">
      <Card className="text-center shadow">
        <Card.Body>
          <h2 className="mb-2">{formatoTiempo(segundos)}</h2>
          <div className="d-flex justify-content-center gap-2">
           <Button onClick={iniciar} variant="primary" disabled={iniciado}>
              Iniciar
            </Button>
            <Button onClick={reiniciar} variant="danger">
              Reiniciar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    );
};

