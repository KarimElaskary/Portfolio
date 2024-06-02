import Home from './Home';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Projects' element={<MyWork />} />
        <Route path='/About' element={<AboutMe />} />
        <Route path='/Contact' element={<Footer />} />
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
