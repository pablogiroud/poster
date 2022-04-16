import './App.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Objective from './components/Objective';
import Sustratos from './components/Sustratos';
import Micoorganism from './components/Micoorganism';
import Medios from './components/Environm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Intro/>
      <Objective />
      <Sustratos />
      <Micoorganism />
      <Medios />
    </div>
  );
}

export default App;
