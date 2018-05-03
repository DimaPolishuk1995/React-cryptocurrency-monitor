import * as React from 'react';

import Main from './components/containers/Main'
import Footer from './components/ui-elements/Footer/index'
import Header from './components/ui-elements/Header/index'

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
