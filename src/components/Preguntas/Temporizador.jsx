import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";

const Temporizador = forwardRef((props, ref) => {
  const DURACION_TOTAL = 5 * 60;
  const [tiempoRestante, setTiempoRestante] = useState(DURACION_TOTAL);
  const [intervaloId, setIntervaloId] = useState(null);

  useImperativeHandle(ref, () => ({
    detenerTemporizador,
  }));

  useEffect(() => {
    const tiempoGuardado = localStorage.getItem("tiempoRestante");
    const ultimaActualizacion = localStorage.getItem("ultimaActualizacion");

    let tiempoInicial = DURACION_TOTAL;
    if (tiempoGuardado && ultimaActualizacion) {
      const segundosPasados = Math.floor((Date.now() - parseInt(ultimaActualizacion)) / 1000);
      tiempoInicial = Math.max(parseInt(tiempoGuardado) - segundosPasados, 0);
    }

    setTiempoRestante(tiempoInicial);
    iniciarIntervalo(tiempoInicial);
  }, []);

  const iniciarIntervalo = (inicio) => {
    const id = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          localStorage.removeItem("tiempoRestante");
          localStorage.removeItem("ultimaActualizacion");
          return 0;
        }
        const nuevo = prev - 1;
        localStorage.setItem("tiempoRestante", nuevo);
        localStorage.setItem("ultimaActualizacion", Date.now().toString());
        return nuevo;
      });
    }, 1000);
    setIntervaloId(id);
  };

  const detenerTemporizador = () => {
    clearInterval(intervaloId);
    setTiempoRestante(0);
    localStorage.removeItem("tiempoRestante");
    localStorage.removeItem("ultimaActualizacion");
  };

  const minutos = Math.floor(tiempoRestante / 60).toString().padStart(2, "0");
  const segundos = (tiempoRestante % 60).toString().padStart(2, "0");

  return (
    <div className="fw-bold fs-4">
      ⏱️ Tiempo restante: {minutos}:{segundos}
    </div>
  );
});

export default Temporizador;