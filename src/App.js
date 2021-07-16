import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <section>
      <React.Fragment>
      <Header/>
      <div className="container">
            <ul className='List'>
              <List 
              img='/images/icon1.png' 
              h3='Declarative'
              text='React make it painless to create interactive UIs.'
              />
              <List 
              img='/images/icon2.png' 
              h3='Components'
              text='Build encapsulated components that manage their state'
              />
              <List 
              img='/images/icon3.png' 
              h3='Single-Way'
              text='A set of inmutable values are passed to the computer component´s'
              />
              <List 
              img='/images/icon4.png' 
              h3='JSX'
              text='Statically-typed, designed to run on modern browsers'
              />
            </ul>
      </div>
      </React.Fragment>
      </section>
    )
  }
}

export default App;
