import React from 'react';
import BookDataView from "./BookDataView";


function BookInfoFallback(props) {
    const {name} = props;
    const initialName = React.useRef(name).current;
    const fallbackBookData = {
        name: initialName,
        title: 'Dummy',
        fetchedAt: 'loading'
    }
    return <BookDataView book={fallbackBookData}/>;
}

export {
    BookInfoFallback
}
