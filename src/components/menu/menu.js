import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

const Menu = () => {
return(
    <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <div>
            <ul>
                <li><a href='/'>Strona główna</a></li>
                <li><a href='/request-form'> Złóż Wniosek</a></li>
             <li><a href='/request-list'>Lista Wniosków</a></li>
            </ul>
            {/*<button> <Link to='/request-form'>Złóż Wniosek paszportowy</Link> </button>*/}
        </div>
    </nav>
)
}

export default Menu;