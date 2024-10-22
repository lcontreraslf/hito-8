import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'


function Profile() {
  const [email, setEmail] = useState('usuario@example.com');
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Perfil del Usuario</Card.Title>
          <Card.Text className="text-center mb-4">
            <strong>Email:</strong> {email}
          </Card.Text>
          <Button variant="danger" className="w-100" >
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Profile