import React from 'react';
import PropTypes from 'prop-types';
import { Button, Button2, ButtonSVG } from 'ui-core';

const App = ({ name }) => {
  return (
    <div>
      <Button>Click Me!</Button>
      <h1>Hdfasfello, {name}!</h1>
      <Button2>Click 2</Button2>
      <ButtonSVG>SVG Button</ButtonSVG>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
