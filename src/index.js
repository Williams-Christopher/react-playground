import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
//import App from './paltrows-power-toes/App';
import AppLang from './lang-context/AppLang';
import RegistrationForm from './registrationForm/registrationForm';
//import App from './playingWithDanger/App';
import App from './binding/App';

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <BrowserRouter><App /></BrowserRouter>, document.getElementById('root')
// )

ReactDOM.render(<App />, document.getElementById('root'));