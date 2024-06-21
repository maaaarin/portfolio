import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import gradientBg from './assets/img/gradient.png';
import gridTop from './assets/img/grid_top.svg';
import gridBottom from './assets/img/grid_bottom.svg';
import portfolio from './assets/img/portfolio.svg';

import Home from "./components/Home/Home"
import Header from "./components/Header/Header";
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </Router>

      <div className="bg-container">
        <img className="bg-gradient" src={gradientBg}/>
        <img className="bg-grid-top" src={gridTop}/>
        <img className="bg-grid-bottom" src={gridBottom}/>
        <img className="bg-portfolio hidden lg:flex" src={portfolio}/>
        <div className="bg-ellipse"></div>
        <div className="bg-top-line"></div>
        <div className="bg-right-line"></div>
        <div className="bg-bottom-line"></div>
        <div className="bg-left-line"></div>
      </div>
    </>
  )
}

export default App
