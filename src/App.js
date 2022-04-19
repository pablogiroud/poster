import Title from './components/Title';
import NavbarCR from './components/Navbar';
import Intro from './components/Intro';
import Objective from './components/Objective';
import MaterialesYMetodos from './components/MaterialesYMetodos';
import Micoorganism from './components/Micoorganism';
import Medios from './components/Environm';
import Diseno from './components/Design';
import Determ from './components/Determ';
import Resultados from './components/Resultados';
import Conclusion from './components/Conclusion';
import Referencias from './components/Referencias';
import Agradecimientos from './components/Agradecimientos'
import Footer from './components/Footer';

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
      <Resultados />
      <Conclusion />
      <Referencias />
      <Agradecimientos />
      <Footer />
    </div>
  );
}

export default App;
