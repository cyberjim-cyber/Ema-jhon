import React, { createContext, useState } from 'react';

import './App.css';
import Header from './component/Header/Header';
import Shop from './component/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Not from './component/Not/Not';
import Inventory from './component/Inventory/Inventory';
import Detail from './component/Detail/Detail';
import Login from './component/Login/Login';
import Shipment from './component/Shipment/Shipment';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


export const userContext=createContext();



function App(props) {

const [loggedInUser,setloggedInUser]=useState({})




  return (
    <userContext.Provider value={[loggedInUser,setloggedInUser]} >
      <h3>{loggedInUser.email}</h3>
   <Header></Header>

<Router>
<Switch>
<Route path="/shop">
<Shop></Shop>

</Route>

<Route path="/review">


<Review></Review>

</Route>
<Route path="/inventory">

<Inventory></Inventory>

</Route>
<Route path="/login"> 
<Login></Login>
</Route>


<PrivateRoute path="/shipment">
<Shipment></Shipment>
</PrivateRoute>
<Route path="/:ke">

<Detail></Detail>


  </Route>


<Route exact path="/">
<Shop></Shop>



</Route>
<Route path="*">

<Not></Not>

</Route>



</Switch>



</Router>




  


    </userContext.Provider>
  );
}

export default App;
