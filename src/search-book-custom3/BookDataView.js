import React from 'react';

const BookDataView = ({book}) => {
    return (
        <div>
            <div className="book-info__img-wrapper">

            </div>

            <section>
                <h2>
                    {book.title}
                    <sup>{book.rating}</sup>
                </h2>
            </section>
        </div>
    )
}

export default BookDataView;
