import React, {useState} from "react";
import "./style.css";



const RequestForm = () => {
    const state= useState(0)
    return(

<div>

    <p className= "wypij"> W celu złożenia wniosku o paszport proszę wypełnić wszystkie pola </p>

        <form>

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
                    <input type="text" className="form-control" name='name' placeholder="Wpisz imię"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Drugie Imię</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name='name' placeholder="Wpisz drugie imię"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nazwisko</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name='name' placeholder="Wpisz Nazwisko"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Data urodzenia</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" name='name' placeholder="Wpisz Nazwisko"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Miejsce urodzenia</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name='name' placeholder="Wpisz miejsce urodzenia"/>
                </div>
                </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Pesel</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" name='name' placeholder="Wpisz swój numer pesel"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Narodowość</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name='name' placeholder="Podaj swoją narodowość"/>
                </div>
            </div>

            <div>

                <p>Podaj swoją płeć</p>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Kobieta
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
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
            <label>
                <input type="checkbox"/>
            </label>

</div>

            <button>Wyślij formularz</button>
        </form>

</div>

    )


}

export default RequestForm;