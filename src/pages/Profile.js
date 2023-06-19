import {FaRegKissWinkHeart} from 'react-icons/fa'
import './Profile.css'

import { useNavigate } from 'react-router-dom'

function Profile() {

    const navigate = useNavigate()

    function handleClick() {

        localStorage.clear()
        navigate('/user')
    }

    return(

        <>
            <h1 className='titulo-profile'>Bem vinde <span className='span-profile'>{localStorage.getItem('user')} <FaRegKissWinkHeart className='icon-profile'></FaRegKissWinkHeart></span></h1>

            <button onClick={handleClick}  className="btn btn-primary btn-lg button-profile"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Sair</button>
        </>

    )
}

export default Profile;