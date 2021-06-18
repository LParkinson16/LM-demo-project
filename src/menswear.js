import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function Menswear(){
const [items, setItems] = useState([])
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>{
        setItems(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
})

return(
    <div>
    {items.map(item=>{
        return(
            <article className="itemCard">
                <p>{item.title}</p>
                <img src={item.image} alt="unable to load"></img>
                <p>{item.price}</p>
            </article>
        )
    })}
    </div>
)
}

export default Menswear

