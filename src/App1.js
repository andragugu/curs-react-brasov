import './App.css';
import React, {useState, useEffect} from 'react';
import {getBooks} from "./services/booksService";

function renderBook(book) {
  const {_id, title, description, author} = book;

  return (
    <div key={_id} className="book">
  <h3>{title}</h3>
  <p>{description}</p>
  <p>{author}</p>
    </div>
  )
}

const App1 = () => {
  const [rate, setRate] =  useState('');
  const [books, setBooks] = useState([]);
  const [err, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getBooks().then(reponse => {
        console.log(reponse, 'raspunsss');
            setBooks(reponse.data);
    })
    .catch(err => {
        console.log(err, 'eroare');
        setError(err)
    })
    .finally(() => setLoading(false))

  }, [])

  const filteredBooks = books.filter(book => book.rating.toString() === rate);


  if (err) throw err;
  if(isLoading) return <p>Loading..........</p>

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

export default App1;
