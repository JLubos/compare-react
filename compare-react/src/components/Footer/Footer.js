import React from 'react';
import './Footer.css';

/*import React from 'react';
import logo from './logo.svg';
import './App.css';
*/


const Footer = () => {

    return (
      <div>
        <footter classNmae="footer is-primary">
        <div className="container">
        <div className="columns">
        <div className='column'>
          <p>And this right here is a spiffy footer</p>
          </div>
          <div className="column has-text-right">
            <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
            <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
          </div>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;
