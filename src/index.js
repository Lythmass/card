import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from "./components/header.js";
import Section from "./components/section.js";
import Footer from "./components/footer.js";

function App() {
     return (
          <div className = "card">
               <Header/>
               <Section/>
               <Footer/>
          </div>
     )
}


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
