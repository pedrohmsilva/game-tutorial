import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <button type="button">
      <Link to="/play">Game</Link>
    </button>
    <button type="button">
      <Link to="/simulate">Simulado</Link>
    </button>
  </>
);

export default Menu;
