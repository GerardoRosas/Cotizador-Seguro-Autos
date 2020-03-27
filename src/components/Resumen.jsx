import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumem = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const { year, marca, plan } = datos;

    if(year === '' || marca === '' || plan === '') return null;

    return (
        <ContenedorResumem>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumem>

     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
    
}
 
export default Resumen;