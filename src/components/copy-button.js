import React from 'react';

const copybutton = () => {
    return (
        <button
        id="copy-button"
        className="ml-auto btn btn-dark"
        data-clipboard-text={this.state.translatedText}
        >
        <i class="fa fa-clipboard" aria-hidden="true" />
        </button> );
}
 
export default copybutton;
