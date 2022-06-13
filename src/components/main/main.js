import  React from 'react';
import {Link} from "react-router-dom";
import Menu from "../menu/menu";

const Main = () => {
    return (
        <div>
            {/*<Menu></Menu>*/}
            <h1>Opis startowy strony Aplikacji</h1>
            <button> <Link to='/request-form'>Złóż Wniosek paszportowy</Link> </button>
        </div>
    )
}
export default Main;