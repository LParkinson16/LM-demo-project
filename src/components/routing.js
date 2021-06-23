import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Menswear from '../pages/menswear'
import App from '../App'
import WomensWear from '../pages/womenswear'
import {FaSearch} from 'react-icons/fa';
import {FaShoppingBasket} from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'

import '../App.css'
import './font.css'

function Routing(){
return(
    <div className="App">
    <Router>
    <nav class="nav">

        <div className="navicons">
            <FaHome className="homeicon"/>
            <FaShoppingBasket className="basketicon"/>
        </div>

            <div id="box">
           <input id ="navSearch" type="text" class="input" placeholder="Search"/>
           <FaSearch className="searchicon"/>
            </div>
            

            <section>
                <Link to ="/">
                    <button class="navbtn">Home</button>
                </Link>
                
                <Link to="/men">
                    <button class="navbtn">Men</button>
                </Link>
                
                <Link to ="/women">
                    <button class="navbtn">Women</button>
                </Link>

                <button class="navbtn">About</button>

                <button class="navbtn">Contact</button>
            </section>
        </nav>


        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/men" exact component={Menswear} />
            <Route path="/women" exact component ={WomensWear} />
        </Switch>
    </Router>
    </div>
    )
}

export default Routing