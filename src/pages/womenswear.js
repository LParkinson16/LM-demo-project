import axios from 'axios'
import {useEffect, useState} from 'react'
/*import NavBar from '../components/navBar'*/
import { FaShoppingCart } from 'react-icons/fa';


function WomensWear(){
    const [items, setItems] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/women's clothing")
        .then(res=>{
            setItems(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])


return(
<div className="App">
    {/*<NavBar/>*/}   
    <h1>Women</h1>
    <div className="item-list">
        {items.map(item=>{
            return(
            <article className="itemCard">
                <strong><p>{item.title}</p></strong>
                <img src={item.image} alt ="err"/>
                <p>£{item.price}</p>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button class="trolleybtn"><FaShoppingCart/></button>
            </article>
            )
            })}
            </div>
            </div>
            )
        }

export default WomensWear