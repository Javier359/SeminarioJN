import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";


const GrabadorAudio = forwardRef((props, ref) => {
  const mediaRecorderRef = useRef(null);
  const [grabando, setGrabando] = useState(false);
  const chunksRef = useRef([]);

  useImperativeHandle(ref, () => ({
    detenerGrabacion,
  }));

  useEffect(() => {
    const iniciarGrabacion = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (e) => {
          if (e.data.size > 0) chunksRef.current.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "grabacion_entrevista.webm";
          a.click();
        };

        mediaRecorderRef.current.start();
        setGrabando(true);

        setTimeout(() => {
          detenerGrabacion();
        }, 5 * 60 * 1000);
      } catch (error) {
        console.error("Error al acceder al micrófono:", error);
      }
    };

    iniciarGrabacion();
  }, []);

  const detenerGrabacion = () => {
    if (mediaRecorderRef.current && grabando) {
      mediaRecorderRef.current.stop();
      setGrabando(false);
    }
  };

  return null; // no muestra nada
});

export default GrabadorAudio;
