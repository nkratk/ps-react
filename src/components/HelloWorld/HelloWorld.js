import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * 
 * @class HelloWorld
 * @extends {Compoennt} 
 */
class HelloWorld extends Component {
    render () {
        return (
            <div> Hello {this.props.message} </div>
        );
    }
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string,
};

HelloWorld.defaultProps = {
    message: 'world'
};

export default HelloWorld;