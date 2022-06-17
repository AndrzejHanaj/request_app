import  React from 'react';
import {Link} from "react-router-dom";
import Menu from "../menu/menu";
import Regulamin from "../regulamin/regulamin";

const Main = () => {
    return (
        <div>
            {/*<Menu></Menu>*/}
            <h1>Opis startowy strony Aplikacji</h1>
            <button> <Link to='/request-form'>Złóż Wniosek paszportowy</Link> </button>
            <Regulamin></Regulamin>
        </div>
    )
}
export default Main;