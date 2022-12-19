import { useEffect, useState } from 'react';
import Character from './Character';

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  function NavPage() {
    return (
      <div>
        <button>Page</button>
      </div>
    );
  }

  useEffect(() => {
    //   //Realiza la peticion a otro servidor de forma asincronica
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json(); //Convierte la respuesta en un archivo json
      //
      setCharacters(data.results);
      setLoading(false);
      console.log(data.results);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="container">
      <NavPage />
      <div className="row">
        {characters.map((character) => {
          return (
            <div key={character.id} className="col-md-2">
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharactersList;
