import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ReducerExample4 from "./useReducer/ReducerExample4";
import BookSearch from './search-book-reducer/BookSearch';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <BookSearch/>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
