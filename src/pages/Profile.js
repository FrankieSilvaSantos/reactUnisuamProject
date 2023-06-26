import { FaRegKissWinkHeart } from 'react-icons/fa'
import './Profile.css'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const navigate = useNavigate()

    const [data, setData] = useState([])










    function handleClick() {

        localStorage.clear()
        navigate('/user')
    }

    return (

        <>

        <div className='container-img-text-profile'>

            <div>
            <h1 className='titulo-profile'>Bem vinde <span className='span-profile'>{localStorage.getItem('user')} <FaRegKissWinkHeart className='icon-profile'></FaRegKissWinkHeart></span></h1>

            

            <img className="rounded-circle img-profile" alt="avatar1" src="/img/profile/skull.gif" />
            </div>
            </div>


            <div className=' container-all-profile'>

            

                <div className='container-texto-profile'>
                <h3 className='titulo-profile' >Email <span className='span-profile2'>{localStorage.getItem('email')}</span></h3>


                
       
              

                <h3 className='titulo-profile'>CPF <span className='span-profile2'>{localStorage.getItem('cpf')}</span></h3>






<h3 className='titulo-profile'>Bairro <span className='span-profile2'>{localStorage.getItem('bairro')}</span></h3>





<h3 className='titulo-profile'>Endereço <span className='span-profile2'>{localStorage.getItem('endereco')}</span></h3>






<h3 className='titulo-profile'>Telefone <span className='span-profile2'>{localStorage.getItem('telefone')}</span></h3>













                <p></p>
            </div>

            </div>

            <div className='container-button-profile'>
            <button onClick={handleClick} className="btn btn-primary btn-lg button-profile"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Sair</button>
                </div>
        </>

    )
}

export default Profile;