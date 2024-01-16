import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar BrowserRouter
import { Navbar } from './components/navBar/Navbar';
import { Home } from './modules/home/Home';
import { Projects } from './modules/projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar
        name={'IvanGG'}
        tab1={'Inicio'}
        tab2={'Proyectos'}
        tab3={'Blog'}
         />
      </header>

      <body className='body'>
        <Router>
          <Routes>
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
