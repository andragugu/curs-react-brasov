import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import Count from './react-closure/Count';
import CountRef from "./react-closure/Count-ref";
import CountEffect from "./react-closure/Count-effect";
// import Container from "./react-error-boundary-custom/Container";
// import Container from "./react-error-boundary/Container";
import BookSearch from "./search-book-reducer/BookSearch";

ReactDOM.render(
    <React.StrictMode>
        <BookSearch/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
