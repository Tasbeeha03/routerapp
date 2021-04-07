import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Services from './Services';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact
       path='/' 
       component={() => <About name='About'></About>}>        
       </Route>
      <Route exact 
      path='/services' 
      render={()=><Services name='Services'></Services>}>       
      </Route>
      <Route exact 
      path='/contact'
       component={Contact}>
       </Route>
      <Route component={Error}>
      </Route>
    </Switch>
   {/* <About></About>
    <Contact></Contact>*/}
    </>
  );
}

export default App;
