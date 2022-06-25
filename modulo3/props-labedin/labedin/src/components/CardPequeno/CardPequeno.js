import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pcard-container">
            <div>
                <h4>{ props.titulo }</h4>
                <p>{ props.endereço }</p>
            </div>
        </div>
    )
}

export default CardPequeno;