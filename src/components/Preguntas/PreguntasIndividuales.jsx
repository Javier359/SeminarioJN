import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaMicrophone } from "react-icons/fa";

const PreguntasIndividuales = () => {
    return (
         <Card className="text-center shadow-lg rounded-4 my-5 w-100">
      <Card.Header className=''>Test</Card.Header>
      <Card.Body>
        <Card.Title> <h2 className=''>Pregunta numero 1 de 10</h2></Card.Title>
        <Card.Text className='text'>
           <h4>¿Cuáles son las principales características de Java y cómo se
            diferencian de otros lenguajes de programación?
            </h4>
        </Card.Text>
         <FaMicrophone size={24} color="red" title="Grabando..." />
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default PreguntasIndividuales;