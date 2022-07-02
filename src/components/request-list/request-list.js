import React from "react";
import "./style.css";


const RequestList = (props) => {

    return(

        <div className="request-list">
            <div className="container">
            <p className="opis">
               - LISTA ZŁOŻONYCH WNIOSKÓW -
            </p>


            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Pesel</th>
                    <th scope="col">mail</th>
                </tr>
                </thead>
                <tbody>


                {props.people.map((person, i) => {
                    return(
                        <tr key={i}>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.surname}
                            </td>
                            <td>
                                {person.personalId}
                            </td>
                            <td>
                                {person.mail}
                            </td>
                        </tr>
                    )
                })}


                </tbody>
            </table>
</div>


        </div>

    )

}

export default RequestList;