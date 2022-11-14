import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BcMagee = () => {

    const [datos, setDatos] = useState([]);

    const loadSensor = () => {
        fetch('http://localhost:5005/api/v1/bcmagee')
            .then(res => res.json())
            .then(allData => setDatos(allData))
    }

    loadSensor()

    return (
        <main>
            <h1>Aqui van los datos BC-MAGEE</h1>
            <hr />
            {Object.keys(datos).map((key)=>{
                return(
                    <div key={key}>
                        <h5>
                            {key}:
                        </h5>
                    </div>
                )
            })}
            <Link to="/">Volver</Link>
        </main>
    )
}

export default BcMagee;