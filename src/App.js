import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

function App() {

  const nome = "Josue"

  return (
    <div className="App">
      <h1>OiOiOiOi</h1>
      <Frase />
      <Frase />
      <SayMyName nome={nome}/>
      <SayMyName nome="Victor"/>
      <Pessoa 
      nome="Beatriz" 
      idade="18" 
      profissao="Kyndryl"
      foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  )
}

export default App;
