import logo from './logo.svg';
import './App.css';

import React from 'react';

function Product() {
  return <div> Milk - 19.99</div>;
}

function App() {
  const productTite = "May";
  const productPrice = "8.99";
  return (
    <div>
      <p>
        Hello world{productTite}{productPrice} 
      </p>
      <ul>
        <li> <Product/> </li>
        <li> Bread - 23.99</li>
        <li> Cheese - 40.99</li>
      </ul>
    </div>
  );
}

export default App;
