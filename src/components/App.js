import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-core';
import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
    return (
        <div>
            <h1>Hdfasfello, {name}!</h1>
            <Button>Click Me!</Button>
        </div>
    );
};

App.propTypes = {
    name: PropTypes.string,
};

export default App;
