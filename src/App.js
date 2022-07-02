import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import RequestForm from "./components/request-form/request-form";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import RequestList from "./components/request-list/request-list";
import Regulamin from "./components/regulamin/regulamin";
import Footer from "./components/footer/footer";
import {collection, doc, getDocs, addDoc} from "firebase/firestore";
import {db} from "./firebase/firebase";


function App() {


    const [people, setPeople] = useState([]);
    const peopleCollectionRef = collection(db, "people");
    useEffect(() => {
        const getPeople = async () => {
            const data = await getDocs(peopleCollectionRef);
            setPeople(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        getPeople()
    }, [])


  return (
      <>
          <Menu/>
          <Router>
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/request-form' element={<RequestForm/>} />
                  <Route path='/request-list' element={<RequestList people={people}/>} />
                  <Route path='/regulamin' elemant={<Regulamin/>}/>

              </Routes>
          </Router>
 <Footer/>
      </>

  )
}

export default App;
