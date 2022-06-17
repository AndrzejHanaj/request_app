import React, {useState} from "react";
import "./style.css";
import Regulamin from "../regulamin/regulamin";



const RequestForm = () => {

    const [personInfo, setPersonInfo] = useState({
        name: "",
        secondName: "",
        surname: "",
        dateOfBirth: "",
        placeOfBirth: "",
        personalId: "",
        nationality: "",
        sex: "",


    });

    const handleChange = (event) => {
        setPersonInfo({ ...personInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(personInfo);
    };

    return(

<div>

    <p className= "wypij"> W celu złożenia wniosku o paszport proszę wypełnić wszystkie pola </p>

        <form onSubmit={handleSubmit}>

            {/*<div className="form-check">*/}
            {/*    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>*/}
            {/*        <label className="form-check-label" htmlFor="flexRadioDefault1">*/}
            {/*            Default radio*/}
            {/*        </label>*/}
            {/*</div>*/}
            {/*<div className="form-check">*/}
            {/*    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />*/}
            {/*        <label className="form-check-label" htmlFor="flexRadioDefault2">*/}
            {/*            Default checked radio*/}
            {/*        </label>*/}
            {/*</div>*/}

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Imię</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name='name'
                           placeholder="Wpisz imię"
                           value={personInfo.name}
                           onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Drugie Imię</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name='secondName'
                           placeholder="Wpisz drugie imię"
                           value={personInfo.secondName}
                           onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nazwisko</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name='surname'
                           placeholder="Wpisz Nazwisko"
                           value={personInfo.surname}
                           onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Data urodzenia</label>
                <div className="col-sm-10">
                    <input type="date"
                           className="form-control"
                           name='dateOfBirth'
                           placeholder="Wpisz Nazwisko"
                           value={personInfo.dateOfBirth}
                           onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Miejsce urodzenia</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name='placeOfBirth'
                           placeholder="Wpisz miejsce urodzenia"
                           value={personInfo.placeOfBirth}
                           onChange={handleChange}
                    />
                </div>
                </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pesel</label>
                <div className="col-sm-10">
                    <input type="number"
                           className="form-control"
                           name='personalId'
                           placeholder="Wpisz swój numer pesel"
                           value={personInfo.personalId}
                           onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Narodowość</label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"
                           name='nationality'
                           placeholder="Podaj swoją narodowość"
                           value={personInfo.nationality}
                           onChange={handleChange}
                    />
                </div>
            </div>

            <div>

                <p>Podaj swoją płeć</p>

            <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       name="sex"
                       id="flexRadioDefault1"
                       value={personInfo.sex}
                       onChange={handleChange}

                />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Kobieta
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input"
                       type="radio"
                       name="sex"
                       id="flexRadioDefault2"
                       value={personInfo.sex}
                       onChange={handleChange}
                />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Mężczyzna
                    </label>
            </div>
            </div>
<div>

    <p>Podaj pztyczynę wyrobienia paszportu</p>
            <select id="list" onChange="getSelectedValue();">
                <option value="wybierz">Wybierz</option>
                <option value="Ptzyczyna2">paszport poprostu zgubilem</option>
                <option value="Przyczyna3">paszport skonczył date ważności</option>
                <option value="Przyczyna3">inna</option>
            </select>
    <input type="text" className="form-control" name='name' placeholder="Podaj inną przyczyne wyrobienia paszportu"/>
</div>
<div>

    <p>Zapoznałęm się z regulaminem</p>
    <Regulamin></Regulamin>
            <label>
                <input type="checkbox"/>
            </label>

</div>

            <button type="submit">Wyślij formularz
            </button>

        </form>

</div>

    )


}

export default RequestForm;