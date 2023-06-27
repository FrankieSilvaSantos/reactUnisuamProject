import { Link } from "react-router-dom";
import { BiHomeHeart } from 'react-icons/bi'
import './Navbar.css'
import { BiGhost } from "react-icons/bi";
import {FaFortAwesomeAlt} from 'react-icons/fa'

function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-style">
        <div className="container-fluid">
          <a className="navbar-brand logo-navbar" href="#"><img src="/logo.png" height={'70px'}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-positioning" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link  link-style" to={`/${localStorage.getItem('id')}`}><BiHomeHeart className="icon-navbar"></BiHomeHeart> Home</Link>
               <Link className="nav-link link-style" to={'/carreiras'}><FaFortAwesomeAlt></FaFortAwesomeAlt> Carreiras</Link>
              <a className="nav-link link-style" href="#">Pricing</a> 


              {localStorage.getItem('email') ? (

                <Link className="nav-link  link-style" to={`/profile/${localStorage.getItem('id')}`}><BiGhost className='icon-navbar'></BiGhost> {localStorage.getItem('user')}</Link>
              ): (
                <Link className="nav-link  link-style" to='/user'><BiGhost className='icon-navbar'></BiGhost> Área do usuário</Link>
              )}

            </div>
          </div>
        </div>
      </nav>
    </>
  )

}

export default Navbar;