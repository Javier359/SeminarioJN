import React from 'react';
import { Container } from 'react-bootstrap';
import ItemDetalle from './ItemDetalle';
import imagen from '../img/img-como-funciona.png';
import '../../styles/Como-funciona.css';


const ComoFunciona = () => {
    return (
        <Container className='my-4 text-center'>

            <h1>Cómo Funciona</h1>
            <article className='d-flex  justify-content-between p-4'>
            <div>
                <img src={imagen} alt="imagen ia" className='img-fluid rounded-4' id='img-como-funciona'/>
            </div>
            <div id='container-como-funciona'>
                <ItemDetalle></ItemDetalle>
            </div>
            </article>

        </Container>
    );
};

export default ComoFunciona;