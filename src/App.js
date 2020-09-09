import React from 'react';
import './App.css';
import Nav from './components/nav'
import Navigation from './components/tabs'
import WebFont from "webfontloader";
WebFont.load({google: {families: ["Roboto:100,300,400,500"]}});

function App() {
  return (
    <div className="App">
       <Nav />
       <Navigation />
    </div>
  );
}

export default App;
