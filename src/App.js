import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*import NavBar from './components/navBar';*/
import { FaShoppingCart } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa'
import './App.css';
import './components/routing'
import { useCart, useCartUpdate } from './components/context';

/*turn into arrow func */
function App() {
  const [items, setItems] = useState([])

  /**add loading icon and error page */
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?results=10')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

const cart = useCart()
const handleClick = useCartUpdate()

  
  return (
    <div className="App">
      {/*<NavBar/>*/}
      <div id="welcome">
        <h1>Welcome</h1>
        <h2>Take a look at some of our bestsellers</h2>
      </div>

      <div className="item-list">
        <h1><FaShoppingBasket /> {cart.length}</h1>
        {items.map(item => {
          return (
            <article className="itemCard">
              <p><strong>{item.title}</strong></p>
              <img src={item.image} alt="unable to load"></img>
              <p>£{item.price}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <button class="trolleybtn" onClick={()=>handleClick(item)}><FaShoppingCart /></button>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default App;