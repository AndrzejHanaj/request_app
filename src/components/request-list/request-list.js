import React from "react";



const RequestList = (props) => {

    return(

        <div>
<div className="container">
            <p>
                Lista złożonych wniosków
            </p>


            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">numer</th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
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
                                {person.secondName}
                            </td>
                            <td>
                                {person.surname}
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