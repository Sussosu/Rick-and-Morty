import CharactersList from './components/CharactersList';

function App() {
  //Se pasa al Componente CharacterList
  //se crea una variable de arreglo donde se van a alamacenar 2 datos
  return (
    <div className="bg-dark text-warning py-3">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <CharactersList />
    </div>
  );
}

export default App;
