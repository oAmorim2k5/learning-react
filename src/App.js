import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Victor'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  function sum(a, b){
    return a+b
  }

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma {sum(1, 4)}</p>
      <img src={url} alt='minha imagem' />
      <p> oii!!</p>
      <HelloWorld />
    </div>
  )
}

export default App;
