import React, {useMemo, useCallback} from 'react';
import {BookInfoFallback} from "./BookInfoFallBack";
import BookDataView from "./BookDataView";
import {fetchBook} from "../services/fetchBook";
import {useAsync2} from "../services/useAsync2";


const BookInfo = ({bookName}) => {

    const booksMap = useMemo(() => {
        return {
            'Magic Book of Easy Spells': '603e398aee22a2135c3bab36',
            'Magic Book of Advanced Spells': '603e3973ee22a2135c3bab35',
            'Magic Book of Spells': '603e24f7ee22a2135c3bab34'
        }
    }, []);

    const asyncCallback = useCallback(() => {
        if (!bookName) {
            return;
        }
        return fetchBook(booksMap[bookName])
    }, [bookName, booksMap]);

    const state = useAsync2(asyncCallback, {
        status: bookName ? 'pending' : 'idle'
    });


    const {data: book, status, error} = state;
    if (status === 'idle') {
        return 'Submit a book'
    } else if (status === 'pending') {
        return <BookInfoFallback name={bookName}/>;
    } else if (status === 'rejected') {
        throw error
    } else if (status === 'resolved') {
        return <BookDataView book={book}/>
    }

}

export default BookInfo;
