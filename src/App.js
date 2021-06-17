import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './navBar';
import Footer from './footer'

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
      <h1>E-commerce</h1>
      <h3>An e-commerce website for e-commerce needs!</h3>
      {/*<button onClick={fetchData}>Welcome</button>*/}

      
    <div className ="item-list">
      {items.map(item=>{
        return(
          <article className="itemCard">
          <p><strong>{item.title}</strong></p>
          <img src={item.image} alt="unable to load"></img>
          <p>£{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <button class="trolleybtn">Add to trolley</button>
          </article>
        )
      })}

    </div>
    <Footer/>
  </div>
  );
}

export default App;
