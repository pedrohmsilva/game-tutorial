import React, { useEffect, useState } from 'react';
import Game from '../../components/Game';
import { requesterService } from '../../services';

const Simulator = () => {
  const [simulation, setSimulation] = useState(null);

  const getSimulation = async () => {
    try {
      return await requesterService.post('/');
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    setSimulation(getSimulation());
  }, []);

  return (
    <Game historyProps={simulation} />
  );
};

export default Simulator;
