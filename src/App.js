import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';
import Footer from './footer';
import {FaShoppingCart} from 'react-icons/fa';



function App() {
  const [items, setItems] = useState([])
  
  useEffect(()=>{
  axios.get('https://fakestoreapi.com/products?results=10')
  .then(res=>{
    setItems(res.data);
  })
  .catch(err=>{
    console.log(err)
  })
}, [])
  
  return (
    <div className="App">
      <NavBar />
      <h1>Welcome</h1>
      <h3>Take a look at some of our bestsellers</h3>

      
    <div className ="item-list">
      {items.map(item=>{
        return(
          <article className="itemCard">
          <p><strong>{item.title}</strong></p>
          <img src={item.image} alt="unable to load"></img>
          <p>£{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <button class="trolleybtn"><FaShoppingCart/></button>
          </article>
        )
      })}

    </div>
    <Footer/>
  </div>
  );
}

export default App;
