import React from 'react';
import { FormattedMessage, FormattedNumber, FormattedTime } from 'react-intl';
import Game from '../../components/Game';

const GamePage = () => (
  <>
    {/* <FormattedMessage id="title" /> */}
    {/* <FormattedNumber value={1128.37} /> */}
    {/* <FormattedDate year="long" value={new Date()} /> */}
    <FormattedTime value={new Date()} />
    <Game />
  </>
);

export default GamePage;
