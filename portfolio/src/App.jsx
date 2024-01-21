import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navBar/Navbar';
import { Home } from './modules/home/Home';
import { Projects } from './modules/projects/Projects';
import { Blog } from './modules/blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <Navbar
            name={'IvanGG'}
            tab1={'Inicio'}
            tab2={'Proyectos'}
            tab3={'Blog'}
          />
        </header>

        <body className='body'>
          <Routes>
          <Route path="/Portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </body>
      </Router>
    </div>
  );
}

export default App;
