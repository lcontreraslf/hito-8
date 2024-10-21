import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '1rem', marginTop: 'auto' }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
              <p>Av. Siempre Viva 123, Springfield</p>
              <p>Contacto: contacto@pizzeriamammamia.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

export default Footer