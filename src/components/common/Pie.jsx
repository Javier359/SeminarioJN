import React from 'react';
import '../../styles/App.css'; // Asegúrate de tener un archivo CSS para estilos

const Pie = () => {
    return (
        <div className='footer'>
            <p>&copy; {new Date().getFullYear()} IntervAI - UTN FRT</p>
        </div>
    );
};

export default Pie;