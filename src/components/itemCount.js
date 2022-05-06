import React, { useCart, useCartRemove } from './context';
import { FaRegTimesCircle } from 'react-icons/fa';
import '../App.css'


function ItemCount() {
  const cart = useCart()
  const handleClick = useCartRemove()

  return (
    <div className="App">
      <h1>Your cart</h1>
      <h2>{cart.length} item(s)</h2>
      <h3>total:</h3>
      <div className="item-list">
        {cart.map(item => {
          return (
            <article className="itemCountCard">
              <p>{item.title}</p>
              <img src={item.image} alt="unable to load"></img>
              <p>£{item.price}</p>
              <button class="trolleybtn" onClick={()=>handleClick(item)}><FaRegTimesCircle /></button>
            </article>
          )
        })}
      </div>
    </div>
  )

}
export default ItemCount