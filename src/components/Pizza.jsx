import React, { useEffect, useState } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";

function Pizza() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    infoPizzasAppi();
  },[]);

  const infoPizzasAppi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data);

    
  };

  const mapPizzas = Array.isArray(info) ? info.map((pizza) => {
    return (
      <Col key={pizza.id}>
        <CardPizza pizza={pizza} />
      </Col>
    );
  }) : (
    <Col key={info.id}>
      <CardPizza pizza={info} />
    </Col>
  );
  
  
  return (
    <div>
      <Header />

      <Container>
        <Row className="g-4" xs={1} md={2} lg={4}>
          {mapPizzas}
        </Row>
      </Container>
    </div>
  );
}

export default Pizza;
