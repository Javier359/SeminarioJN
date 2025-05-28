import React from "react";
import Inicio from "./PaginaPrincipal/Inicio";
import video from "../../public/videos/video-principal.mp4";
import DescripcionApp from "./PaginaPrincipal/DescripcionApp";
import ComoFunciona from "./ComoFunciona/ComoFunciona";
import "../styles/Principal.css";
import "../styles/App.css";

const Principal = () => {
  return (
    <div className="pagina-principal">
      <div className="seccion-video">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="contenedor-principal">
          <Inicio />
        </div>
      </div>
      <DescripcionApp />
       <ComoFunciona />
    </div>
  );
};


export default Principal;
