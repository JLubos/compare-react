import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import {Route} from 'react-router-dom';


/*import React from 'react';
import logo from './logo.svg';
import './App.css';
*/


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/faq" component={Faq} />
      <Footer />
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
