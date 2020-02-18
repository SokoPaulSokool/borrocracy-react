import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import  firebase from 'firebase';
import 'firebase//auth';

var config ={
   apiKey: 'AIzaSyBj9d_BSzHMvJZT1CMyMiJp3j-X7NW6q78',
    authDomain: 'borrocracy-b58eb.firebaseapp.com',
    databaseURL: 'https://borrocracy-b58eb.firebaseio.com',
    projectId: 'borrocracy-b58eb',
    storageBucket: 'borrocracy-b58eb.appspot.com',
    messagingSenderId: '696402847742'
}

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
