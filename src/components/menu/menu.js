import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

const Menu = () => {
return(
    <div className="divmenu">
    <nav className="navbar navbar-light bg-light justify-content-between">
        <p className="logo">Andrzej Hanaj</p>
        <div>
            <ul>
                <li><a href='/'>Strona główna</a></li>
                <li className="Li"><a href='/request-form'> Złóż Wniosek</a></li>
             <li><a href='/request-list'>Lista Wniosków</a></li>
            </ul>
            {/*<button> <Link to='/request-form'>Złóż Wniosek paszportowy</Link> </button>*/}
        </div>
    </nav>
    </div>
)
}

export default Menu;