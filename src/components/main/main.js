import  React from 'react';
import {Link} from "react-router-dom";
import Menu from "../menu/menu";
import Regulamin from "../regulamin/regulamin";
import "./style.css"


const Main = () => {
    return (
        <div className= "main">
            {/*<Menu></Menu>*/}

            <div className="container">
            <h1>Witaj w nowej Aplikacji REQUEST.APP na której z łatwością wypełnisz i złożysz formularz umorzliwiający złożeine wniosku paszportowego</h1>

            <div className="button">
            <button> <Link to='/request-form'>Złóż Wniosek paszportowy</Link> </button>
                <button><a href='/request-list'>Lista Wniosków</a></button>
            </div>

                <Regulamin></Regulamin>
            </div>
        </div>
    )
}
export default Main;