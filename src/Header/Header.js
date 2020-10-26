import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h2>Header Component</h2>
        <h5>Adding stash commands</h5>
        <p>this is header description</p>
        <div>header subtitle</div>
        <h2>{window.config.env}</h2>
        <h2>{window.config.apiUrl}</h2>
      </div>
    );
  }
}

export default Header;
