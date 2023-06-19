import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import User from './pages/User';
import Profile from './pages/Profile';

function App() {
  return (
   
    <>
    <Router>
  
  <Navbar></Navbar>


  <Routes>
  
   <Route path={`/${localStorage.getItem('user')}`} element={<Home></Home>}></Route>

    <Route path='/footer' element={<Footer></Footer>}></Route>

    <Route path='/user' element={<User></User>}></Route>
  
    <Route path={`/profile/${localStorage.getItem('user')}`}element={<Profile></Profile>}></Route>
   
  </Routes>
  <Footer></Footer> 
  </Router>


    </>


  );
}

export default App;
