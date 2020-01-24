import React, { useEffect, useState } from 'react';
import Game from '../../components/Game';
import { requesterService } from '../../services';

const Simulator = () => {
  const [simulation, setSimulation] = useState();

  const getSimulation = async () => {
    try {
      const response = await requesterService.get('/');
      setSimulation(response);
      return response;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getSimulation();
  }, []);

  return (
    <Game historyProps={simulation} />
  );
};

export default Simulator;
