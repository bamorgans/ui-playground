import React from 'react';
import PropTypes from 'prop-types';
import { Button, Button2, ButtonSVG } from 'ui-core';

const App = ({ name }) => {
  return (<div>
    <h1>Hello, {name}!</h1>
    <Button>Click Me!</Button>
    <Button2>button2</Button2>
    <ButtonSVG>SVG Button</ButtonSVG>
  </div>)
        ;
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
