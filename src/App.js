import logo from './logo.svg';
import './App.css';
import React from "react";
import Main from "./components/main/main";
import Menu from "./components/menu/menu";
import RequestForm from "./components/request-form/request-form";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import RequestList from "./components/request-list/request-list";
import Regulamin from "./components/regulamin/regulamin";


function App() {
  return (
      <>
          <Menu>
          </Menu>
          <Router>
              <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/request-form' element={<RequestForm/>} />
                  <Route path='/request-list' element={<RequestList/>} />
                  <Route path='/regulamin' elemant={<Regulamin/>}/>
              </Routes>
          </Router>

      </>

  )
}

export default App;
