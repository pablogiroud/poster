import './App.css';
import Title from './components/Title';
import NavbarCR from './components/Navbar';
import Intro from './components/Intro';
import Objective from './components/Objective';
import MaterialesYMetodos from './components/MaterialesYMetodos';
import Micoorganism from './components/Micoorganism';
import Medios from './components/Environm';
import Diseno from './components/Design';
import Determ from './components/Determ';

function App() {
  return (
    <div className="App">
      <NavbarCR />
      <Title />
      <Intro/>
      <Objective />
      <MaterialesYMetodos />
      <Micoorganism />
      <Medios />
      <Diseno />
      <Determ />
    </div>
  );
}

export default App;
