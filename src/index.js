import React from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//style imports
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './css/main.css';



//main component
// import ShoppingCart from './components/shoppingCart';
import App from './components/app';




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,document.querySelector('#root'));
