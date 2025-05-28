import "../../styles/Descripcion.css"; // Importamos los estilos


const DescripcionApp = () => {
  return (
    <div className="descripcion-container">
      <h1 className="descripcion-titulo">IntervAI</h1>
      <p className="descripcion-parrafo">
        Es una aplicación innovadora desarrollada por estudiantes de la <br />
        Universidad Tecnológica Nacional - Facultad Regional Tucumán, con el <br />
        objetivo de ayudar a estudiantes y personas sin experiencia en entrevistas <br />
        laborales a prepararse de manera práctica y efectiva.
      </p>
      <p className="descripcion-parrafo">
        Utilizando inteligencia artificial, la app simula una entrevista real, <br />
        adaptándose a distintos sectores y niveles de experiencia, y te brinda un <br />
        feedback detallado para que mejores tus respuestas, seguridad y <br />
        comunicación. Así, podrás practicar una y otra vez, ganando confianza y <br />
        habilidades clave antes de enfrentarte a un reclutador.
      </p>
      <p className="descripcion-parrafo">
        ¡Prepárate, recibe análisis inteligente y domina tus próximas entrevistas!
      </p>
    </div>
  );
};

export default DescripcionApp;
