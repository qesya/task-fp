import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchFilms } from './utils/fetchFilms';
import { IFilm } from './types/FilmType';
import { Film } from './components/film/Film';

function App() {
  const [films, setFilms] = useState<Array<IFilm>>([]);
  useEffect(() => {
    const getFilms = async () => {
      const data = await fetchFilms();

      setFilms(data.films);
    }
    getFilms();
    
    const fetchEvery5Seconds = setInterval(() => {
      getFilms();
    }, 5000);

    return () => clearInterval(fetchEvery5Seconds);
  }, []);

  return (
    <div className="App">
      {
        films.map((data, _index) => {
          return (
            <Film
              key={data.id}
              data={data}
              minDuration={data.duration_seconds}
            />
          )
        })
      }
    </div>
  );
}

export default App;
