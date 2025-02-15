import './App.css';
import React, {useState} from 'react';


const books = [
    {
        id: "603e1c03935f5f2d90595d0c",
        title: "Magic Book of Spells",
        description: "Spells Book",
        author: "Alexis Morrigan",
        rating: 8,
    },
    {
        id: "603e1c03935f5f2d90595d0d",
        title: "Magic Book of Easy Spells",
        description: "Spells Book",
        author: "Gugu Andra",
        rating: 9,
    },
    {
        id: "603e1c03935f5f2d90595d0f",
        title: "Magic Book of Advanced Spells",
        description: "Spells Book",
        author: "Alexis Morrigan",
        rating: 10,
    },
    {
        id: "603e1c03935f5f2d9059560f",
        title: "Magic Book of Advanced Spells 2",
        description: "Spells Book",
        author: "Alexis Morrigan",
        rating: 10,
    }
];


function renderBook(book) {
    const {id, title, description, author} = book;

    return (
        <div key={id} className="book">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{author}</p>
        </div>
    )
}

const App = () => {
    const [rate, setRate] = useState('');


    const filteredBooks = books.filter(book => book.rating.toString() === rate);

    return (
        <>
            <div className="content">
                <main>
                    <section id="filters">
                        <select value={rate} onChange={(e) => {
                            setRate(e.target.value)
                        }}>
                            <option value="">All ratings</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </section>
                    <section id="books">
                        {rate && <h2>Found {filteredBooks.length} books</h2>}
                        {filteredBooks.map(renderBook)}
                    </section>
                </main>
            </div>

        </>
    );
}

export default App;
