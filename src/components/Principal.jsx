import { Element } from "react-scroll";
import Inicio from "./PaginaPrincipal/Inicio";
import video from "../../public/videos/video-principal.mp4";
import DescripcionApp from "./PaginaPrincipal/DescripcionApp";
import ComoFunciona from "./ComoFunciona/ComoFunciona";
import "../styles/Principal.css";

const Principal = () => {
  return (
    <div className="pagina-principal">
      <Element name="inicio" className="seccion-video">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="contenedor-principal">
          <Inicio />
        </div>
      </Element>

      <Element name="como-funciona">
        <ComoFunciona />
      </Element>

      <Element name="descripcion">
        <DescripcionApp />
      </Element>
    </div>
  );
};

export default Principal;
