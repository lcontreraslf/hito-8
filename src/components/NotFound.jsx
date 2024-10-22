import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/img/404-3.jpg'

function NotFound() {
    return (
        <div className="not-found"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'yellow',
                textAlign: 'center'
            }}
        >
            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
                padding: '20px',
                borderRadius: '10px',
                backdropFilter: 'blur(5px)', // Desenfoque de fondo
            }}>
                <h1>Página no encontrada</h1>
                <p>Lo sentimos, la página que estás buscando no existe.</p>
                <Link to="/" style={{ color: 'yellow' }}>Volver a la página principal</Link>
            </div>
        </div>
    )
}

export default NotFound
