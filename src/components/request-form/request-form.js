import "./style.css";
import Regulamin from "../regulamin/regulamin";
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {db} from "../../firebase/firebase";
import {collection, doc, getDocs, addDoc} from "firebase/firestore";

const RequestForm = () => {


    const peopleColectionRef = collection(db, "people")
    const createPerson = async () => {
        await addDoc (peopleColectionRef, personInfo)

    }

    const check = (checked) => {
       return  checked !== "" ? {display: "none"} : {display: "block"}
    }

    const [personInfo, setPersonInfo] = useState({
        name: "",
        secondName: "",
        surname: "",
        dateOfBirth: "",
        placeOfBirth: "",
        personalId: "",
        nationality: "",
        sex: "",
        reason: "",
        differentReason: "",
        mail: "",
        number: "",
        city: "",
        street: "",
        homeNumber: "",
        zipCode: "",




    });
    const [regulamin, setRegulamin] = useState({regulamin: false});
    const acceptRegulamin = () => {
        setRegulamin({
            regulamin: !regulamin.regulamin
        });


        console.log(regulamin);
        console.log(regulamin.regulamin);
    }
    const handleChange = (event) => {
        setPersonInfo({ ...personInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
createPerson();
    };
    // const checkNumber = (hasError) => {
    //     if (hasError) {
    //         personInfo.personalId !== '' && personInfo.personalId.length !== '11' ? {display: "none"} : {display: "block"}
    //     }
    // }


    function validation(name){
        if (name !== ""){
            return ''
        }
        else console.log("źle");

    }

        return(

<div className="container">

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
                           // onBlur={validation(personInfo.name)}
                    />
                    <p style={check(personInfo.name)}>pole jest wymagane
                        {/*{personInfo.name === ''?  <p>jest zle</p>:''}*/}
                    </p>
                    {validation(personInfo.name)}
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
                    <p style={check(personInfo.surname)}>pole jest wymagane</p>
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
                           // onBlur={checkNumber(true)}

                    />

                    <p style={personInfo.personalId.length === 11 ? {display: "none"} : {display: "block"}}>Pesel powinien zawierać 11 cyfr</p>
                </div>

                {/*<p  style={}>Numer pelel powinien zawierać 11 cyfr*/}

                {/*</p>*/}

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

            <div className="form-check" onClick={handleChange}>
                <input className="form-check-input"
                       type="radio"
                       name="sex"
                       id="flexRadioDefault1"
                       value="female"
                       onChange={handleChange}

                />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Kobieta
                    </label>
            </div>
            <div className="form-check" onClick={handleChange}>
                <input className="form-check-input"
                       type="radio"
                       name="sex"
                       id="flexRadioDefault2"
                       value="male"
                       onChange={handleChange}
                />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Mężczyzna
                    </label>
            </div>
            </div>
<div>

    <p>Podaj pztyczynę wyrobienia paszportu</p>
            <select name="reason" onChange={handleChange} placeholder='wybierz'>
                <option value="paszport poprostu zgubilem">paszport poprostu zgubilem</option>
                <option value="paszport skonczył date ważności">paszport skonczył date ważności</option>
                <option value="Przyczyna3">inna</option>
            </select>
    <input type="text"
           className="form-control"
           name='differentReason'
           placeholder="Podaj inną przyczyne wyrobienia paszportu"
           onChange={handleChange}
           style={personInfo.reason !== 'Przyczyna3' ? {display: "none"} : {display: "block"}}
    />
</div>
<div>


{/*    <input type="text"*/}
{/*           className="form-control"*/}
{/*           name='nationality'*/}
{/*           placeholder="Podaj swoją narodowość"*/}
{/*           value={personInfo.nationality}*/}
{/*           onChange={handleChange}*/}
{/*    />*/}
{/*</div>*/}
{/*</div>*/}
{/*    */}


    <p className="dane">Dane Kontaktowe</p>


    <div className="form-group row">
        <label className="col-sm-2 col-form-label">Adres e-mail</label>
        <div className="col-sm-10">
            <input type=""
                   className="form-control"
                   name='mail'
                   placeholder="Adres e-mail"
                   value={personInfo.mail}
                   onChange={handleChange}
            />
        </div>
    </div>

    <div className="form-group row">
        <label className="col-sm-2 col-form-label">Numer telefonu</label>
        <div className="col-sm-10">
            <input type="number"
                   className="form-control"
                   name='number'
                   placeholder="Telefon"
                   value={personInfo.number}
                   onChange={handleChange}
            />
        </div>
    </div>


    <div className="form-group row">
        <label className="col-sm-2 col-form-label">Adres zamieszkania</label>
        <div className="col-sm-10">
            <input type="text"
                   className="form-control"
                   name='city'
                   placeholder="Miasto"
                   value={personInfo.city}
                   onChange={handleChange}

            />
            <input type="text"
                   className="form-control"
                   name='street'
                   placeholder="ulica"
                   value={personInfo.street}
                   onChange={handleChange}

            />
            <input type="text"
                   className="form-control"
                   name='homeNumber'
                   placeholder="Numer lokalu"
                   value={personInfo.homeNumber}
                   onChange={handleChange}

            />
            <input type="text"
                   className="form-control"
                   name='zipCode'
                   placeholder="Kod pocztowy"
                   value={personInfo.zipCode}
                   onChange={handleChange}

            />
        </div>
    </div>


    <p>Zapoznałęm się z regulaminem</p>
    <Regulamin></Regulamin>
            <label>
                <input name= "regulamin" type="checkbox"
                       value={personInfo.regulamin}
                       onClick={acceptRegulamin}

                />
            </label>

</div>

            <button className="button1" type="submit" disabled={!regulamin.regulamin} >Wyślij wniosek</button>


        </form>

</div>

    )


}

export default RequestForm;