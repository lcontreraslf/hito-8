import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError(true);
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (email === 'usuario@example.com' && password === '123456') {
      setError(false);
      setMessage('Inicio de sesión exitoso.');
    } else {
      setError(true);
      setMessage('Email o contraseña incorrectos.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={4} className="mx-auto">
          <div className="login-form">
            <h2 className="text-center">Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
              </Button>
            </Form>

            {message && (
              <Alert variant={error ? 'danger' : 'success'} className="mt-3">
                {message}
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
