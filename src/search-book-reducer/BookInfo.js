import React, {useReducer, useEffect, useMemo} from 'react';
import {bookReducer} from "../services/bookReducer";
import {BookInfoFallback} from "./BookInfoFallBack";
import BookDataView from "./BookDataView";
import {fetchBook} from "../services/fetchBook";
import {useThunkReducer} from "./useThunkReducer";


const BookInfo = ({bookName}) => {

    const booksMap = useMemo(() => {
        return {
            'Magic Book of Easy Spells': '603e398aee22a2135c3bab36',
            'Magic Book of Advanced Spells': '603e3973ee22a2135c3bab35',
            'Magic Book of Spells': '603e24f7ee22a2135c3bab34'
        }
    }, []);

    const [state, dispatch] = useThunkReducer(bookReducer, {
        status: bookName ? 'pending' : 'idle',
        book: null,
        error: null
    })

    const getBookDetails = React.useCallback((dispatch) => {
        if (!bookName) {
            return;
        }

        dispatch({type: 'fetchBookPending'})
        fetchBook(booksMap[bookName]).then(
            book => {
                dispatch({type: 'fetchedBookSuccess', book})
            },
            error => {
                dispatch({type: 'fetchedBookFailed', error})
            }
        )
    }, [fetchBook, bookName, booksMap])

    // useEffect(() => {
    //     dispatch((enhancedDispatched) => {
    //         return getBookDetails(enhancedDispatched);
    //     })
    // }, [bookName, booksMap])

    useEffect(() => {
        dispatch(getBookDetails)
    }, [bookName, booksMap])

    const {book, status, error} = state;
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
