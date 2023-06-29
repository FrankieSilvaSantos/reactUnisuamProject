import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import User from './pages/User';
import Profile from './pages/Profile';
import Registrar from './pages/Registrar';
import Carreiras from './pages/Carreiras';
import Carreiras2 from './pages/Carreiras2';
import About from './pages/About';
import Faq from './pages/Faq';

function App() {
  return (
   
    <>
    <Router>
  
  <Navbar></Navbar>


  <Routes>
  
   <Route path={`/${localStorage.getItem('id')}`} element={<Home></Home>}></Route>

    <Route path='/footer' element={<Footer></Footer>}></Route>

    <Route path='/user' element={<User></User>}></Route>
  
    <Route path={`/profile/:id`}element={<Profile></Profile>}></Route>

    <Route path='/registrar' element={<Registrar></Registrar>}></Route>

    <Route path='/carreiras' element={<Carreiras></Carreiras>}></Route>

    <Route path='/carreiras2' element={<Carreiras2></Carreiras2>}></Route>

    <Route path='/about' element={<About></About>}></Route>

    <Route path='/faq' element={<Faq></Faq>}></Route>
   
  </Routes>
  <Footer></Footer> 
  </Router>


    </>


  );
}

export default App;
