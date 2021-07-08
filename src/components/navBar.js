import { FaSearch } from 'react-icons/fa';
import React from "react";

function NavBar() {

    return (
        <nav class="nav">
            {/*<img id ="navImg" src={logo} alt="Err"/>*/}
            <div id="box">
                <input id="navSearch" type="text" class="input" placeholder="Search" />
                <FaSearch />
            </div>

            <section>
                <button class="navbtn">Home</button>

                <button class="navbtn">Men</button>

                <button class="navbtn">Women</button>

                <button class="navbtn">About</button>

                <button class="navbtn">Contact</button>
            </section>

        </nav>

    )
}


export default NavBar