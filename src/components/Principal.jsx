import React from "react";
import Inicio from "./PaginaPrincipal/Inicio";
import video from "../../public/videos/video-principal.mp4";

const Principal = () => {
  return (
    <>
      <div className="contenedor-principal"> <Inicio></Inicio></div>
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    
    </>
  );
};

export default Principal;
