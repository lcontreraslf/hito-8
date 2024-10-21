import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const CardPizza = ({ pizza }) => {
  const ingredientsPizzaMap = pizza.ingredients.map((ingredients) => (
    <li key={ingredients}>{ingredients}</li>
  ));
  return (
    <Card>
      <Card.Img variant="top" src={pizza.img} alt={pizza.name} />

      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        
        <ul>{ingredientsPizzaMap}</ul>
        <Card.Text>
          <strong>Precio:</strong> ${pizza.price}
        </Card.Text>
        <Button variant="primary">Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default CardPizza;
