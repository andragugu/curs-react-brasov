import React, {useState, useEffect} from 'react';


const BookForm = ({bookName: externalBookName, initialBookName = externalBookName || '', onSubmit}) => {
    const [bookName, setBookName] = useState(initialBookName);


    useEffect(() => {
        if (typeof externalBookName === 'string') {
            setBookName(externalBookName)
        }
    }, [externalBookName])

    function handleChange(e) {
        setBookName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(bookName);
    }

    function handleSelect(newBookName) {
        setBookName(newBookName);
        onSubmit(newBookName);
    }

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <label htmlFor="bookName-input">Book Name</label>
            <small>
                Try{' '}
                <button
                    className="invisible-button"
                    type="button"
                    onClick={() => handleSelect('Magic Book of Easy Spells')}
                >
                    "Magic Book of Easy Spells"
                </button>
                {', '}
                <button
                    className="invisible-button"
                    type="button"
                    onClick={() => handleSelect('Magic Book of Advanced Spells')}
                >
                    "Magic Book of Advanced Spells"
                </button>
                {', or '}
                <button
                    className="invisible-button"
                    type="button"
                    onClick={() => handleSelect('Magic Book of Spells')}
                >
                    "Magic Book of Spells"
                </button>
            </small>
            <div>
                <input
                    className="bookName-input"
                    id="bookName-input"
                    name="bookName"
                    placeholder="Book Name..."
                    value={bookName}
                    onChange={handleChange}
                />
                <button type="submit" disabled={!bookName.length}>
                    Submit
                </button>
            </div>
        </form>
    )

}

export default BookForm;
