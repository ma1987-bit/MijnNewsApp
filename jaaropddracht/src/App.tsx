import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar/navbar';
import HomePage from './Component/home/home';
import ContactPage from './Component/contact/contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './Component/about/about';
import DetailsPage from './Component/details/details';
import Footerpage from './Component/footer/footer';
import  {ThemeContext}  from './Component/context/themecontext';
import { MoreDetails } from './Component/details/moredetails';

function App() {
  const [mode, setMode] = useState('light')

  return (
    <ThemeContext.Provider value={{mode:mode,setMode:setMode}}>
      <Router>

        <>
          <NavBar />
          <Switch>
          <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/details">
              <DetailsPage />
            </Route>
            <Route path="/moredetails/:titel">
              <MoreDetails/>
            </Route>
          </Switch>
          <Footerpage />
        </>
      </Router>
    </ThemeContext.Provider>
  );
}
export default App;
