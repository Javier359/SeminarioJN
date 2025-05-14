
import { Button, Container } from 'react-bootstrap';
import '../../styles/Principal.css';


const Inicio = () => {
    return (
        <Container className = 'my-4 text-center justifi-content-center d-flex flex-column' >
            <h1>InterAI</h1>
            <span>¿Listo para poner a prueba tus hablilidades? Responde pregutas como una entrevista real, recibe feedback inteligente y descubre como mejorar...</span>
            <Button variant='success' className='m-3'>Comenzar</Button>
        </Container>
    );
};

export default Inicio;