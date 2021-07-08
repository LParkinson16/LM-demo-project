import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaShoppingCart } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa'
import '../App.css';
/*import NavBar from '../components/navBar'*/
import { useCart, useCartUpdate } from '../components/context';

function Menswear(){
const [items, setItems] = useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then(res=>{
        setItems(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, [])

const cart = useCart()
const handleClick = useCartUpdate()

return(
    <div className="App">
    {/*<NavBar/>*/}     
    <h1>Menswear</h1>
   <h1><FaShoppingBasket/> {cart.length}</h1>
    <div className='item-list'>
    {items.map(item=>{
        return(
            <article className="itemCard">
                <strong><p>{item.title}</p></strong>
                <img src={item.image} alt="unable to load"></img>
                <p>£{item.price}</p>
                <p>{item.description}</p>
                <button class="trolleybtn" onClick={()=>handleClick(item)}><FaShoppingCart/></button>
            </article>
        )
    })}
    </div>
    </div>
)
}


export default Menswear