import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {

  const nome = "Josue"
  
  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <SayMyName nome="Victor"/>
      <Pessoa 
      nome="Beatriz" 
      idade="18" 
      profissao="Kyndryl"
      foto="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;
