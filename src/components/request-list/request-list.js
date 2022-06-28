import React from "react";



const RequestList = () => {

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
                <tr>
                    <th scope="row">1</th>
                    <td>Andrzej</td>
                    <td>Hanaj</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jola</td>
                    <td>Recka</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
</div>


        </div>

    )

}

export default RequestList;