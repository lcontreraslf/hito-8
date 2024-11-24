import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import { useUser } from '../context/UserContext'; 

function Profile() {
  const { email, logout, token } = useUser(); 
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('No estás autenticado');
    }
  }, [token]);

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger" className="w-100 text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Perfil del Usuario</Card.Title>
          <Card.Text className="text-center mb-4">
            <strong>Email:</strong> {email || 'No disponible'}
          </Card.Text>
          <Button 
            variant="danger" 
            className="w-100" 
            onClick={logout} 
          >
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
