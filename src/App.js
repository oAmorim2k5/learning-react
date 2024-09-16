import './App.css';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  const nome = "Josue"

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  )
}

export default App;
