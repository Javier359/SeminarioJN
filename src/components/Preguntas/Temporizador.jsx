import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Temporizador = () => {
  const DURACION_TOTAL = 5 * 60; // 20 minutos en segundos
  const [tiempoRestante, setTiempoRestante] = useState(DURACION_TOTAL);

  useEffect(() => {
    const tiempoGuardado = localStorage.getItem("tiempoRestante");
    const ultimaActualizacion = localStorage.getItem("ultimaActualizacion");

    if (tiempoGuardado && ultimaActualizacion) {
      const segundosPasados = Math.floor((Date.now() - parseInt(ultimaActualizacion)) / 1000);
      const nuevoTiempo = Math.max(parseInt(tiempoGuardado) - segundosPasados, 0);
      setTiempoRestante(nuevoTiempo);
    }

    const intervalo = setInterval(() => {
      setTiempoRestante(prev => {
        if (prev <= 1) {
          clearInterval(intervalo);
          localStorage.removeItem("tiempoRestante");
          localStorage.removeItem("ultimaActualizacion");
          return 0;
        }
        const nuevoTiempo = prev - 1;
        localStorage.setItem("tiempoRestante", nuevoTiempo);
        localStorage.setItem("ultimaActualizacion", Date.now().toString());
        return nuevoTiempo;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const minutos = Math.floor(tiempoRestante / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (tiempoRestante % 60).toString().padStart(2, "0");

  return (
    <div className="fw-bold fs-4">
      ⏱️ Tiempo restante: {minutos}:{segundos}
    </div>
  );
};

export default Temporizador;

