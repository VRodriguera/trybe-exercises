
import './App.css';

const tasks = ['Estudar', 'Limpar casa', 'Lavar carro', 'Limpar a gaiola do hamster', '123']

const Task = () => {
  return tasks.map((task) => <li>{task}</li>);
}

function App() {
  return <ol><Task/></ol>;
}

export default App;
