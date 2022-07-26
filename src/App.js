import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects';
import Experience from './components/Pages/Experience/Experience';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/projects' element={ <Projects/>} />
          <Route path='/experience' element={ <Experience/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
