import React, {useState} from 'react';
import BookForm from "./BookForm";
import BookErrorBoundary from "./BookErrorBoundary";
import BookInfo from "./BookInfo";


const BookSearch = () => {
    const [bookName, setBookName] = useState('');


    function handleSubmit(bookName) {
        setBookName(bookName)
    }

    function handleReset() {
        setBookName('')
    }


    return (
        <div className="books-info-app">
            <BookForm bookName={bookName} onSubmit={handleSubmit}/>
            <hr/>
            <div className="book-info">
                <BookErrorBoundary onReset={handleReset} resetKeys={[bookName]}>
                    <BookInfo bookName={bookName}/>
                </BookErrorBoundary>
            </div>
        </div>
    )
}

export default BookSearch;
