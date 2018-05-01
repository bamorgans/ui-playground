import React from 'react';
import PropTypes from 'prop-types';
import { Button, Button2, ButtonExtImage, ButtonSVG, SiteNav, SiteNavDataProvider } from 'ui-core';

import '../assets/css/layout.css';
import '../assets/css/content_layout.css';
import ferrari from '../assets/images/ferrari.png';

export default class App extends React.Component {
    constructor() {
        super();
        this.siteNavDataProvider = new SiteNavDataProvider().fetchMenuData();
    }

    render() {
        console.log('ferrari: ', ferrari);
        return (
            <div>
                <ButtonExtImage imageSrc={ferrari} />
                <ButtonExtImage imageSrc='https://static.nytimes.com/images/icons/ios-ipad-144x144.png' />
                <div id='siteNav' className='sitenav'>
                    <SiteNav appState='WIDE' dataPromise={this.siteNavDataProvider} />
                </div>
                <h1>Hello, {this.props.name}!</h1>
                <Button>Click Me!</Button>
                <Button2>button2</Button2>
                <ButtonSVG>SVG Button</ButtonSVG>
            </div>);
    }

}
App.defaultProps = {
    name: ''
};
App.propTypes = {
    name: PropTypes.string,
};

