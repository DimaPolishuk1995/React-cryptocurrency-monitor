import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <span>Home page</span>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

export default Home;
