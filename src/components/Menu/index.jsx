import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <button type="button">
      <Link to="/play">Jogo Simulado</Link>
    </button>
    <button type="button">
      <Link to="/simulate">Jogo Simulado</Link>
    </button>
  </>
);

export default Menu;
