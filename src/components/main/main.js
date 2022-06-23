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
            <h1>Witaj w nowej Aplikacji REQUEST.APP dzięki której z łatwością wypełnisz formularz i złożysz wniosek paszportowy bez wychodzenia z domu.</h1>

            <div className="button">
            <button className="button1"> <a href='/request-form'>Złóż Wniosek paszportowy</a> </button>
                <button className="button1"><a href='/request-list'>Lista Wniosków</a></button>
            </div>

                <Regulamin></Regulamin>

            </div>

        </div>
    )
}
export default Main;


// Zrobić jeszcze na górze zegar
