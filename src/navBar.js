/*import logo from './small_logo.png';*/

function NavBar(){
    return(
        <nav class="nav">
            {/*<img id ="navImg" src={logo} alt="Err"/>*/}
            <input id ="navSearch" type="text" class="input" placeholder="Search"/>
            <section>
                <button class="navbtn">Home</button>
                <button class="navbtn">Page One</button>
                <button class="navbtn">Contact</button>
                <button class="navbtn">About</button>

            </section>
        </nav>
    )
}

export default NavBar