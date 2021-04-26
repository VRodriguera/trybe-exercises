
import './App.css';

const tasks = ['Estudar', 'Limpar casa', 'Lavar carro', 'Limpar a gaiola do hamster']

const task = () => {
  return tasks.map((task) => <li>{task}</li>);
}

function App() {
  return <ol>{task()}</ol>;
}

export default App;
