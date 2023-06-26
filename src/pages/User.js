import './User.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BiWinkTongue} from 'react-icons/bi'
import {BiDizzy} from 'react-icons/bi'

function User() {

const navigate = useNavigate()


  const [data, setData] = useState([])

  const [user, setUser] = useState()
  const [user2, setUser2] = useState()

  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()

  const [success, setSuccess] = useState()
  const [error, setError] = useState(true)









  function handleClick(e) {
    e.preventDefault()

    axios.get('http://localhost:5000/users')
      .then((response) => {
        console.log((response.data))
        setData(response.data)
      })

      .then(() => {
        setUser2(user)
      })

      .then(() => {
        setPassword2(password)
      })

      .then(() => {


        data.map((items) => {

          if (items.email === user && items.password === password) {

            console.log('Logado com sucesso!!')
            localStorage.setItem('id', items.id)
            localStorage.setItem('user',items.nome)
            localStorage.setItem('email',items.email)
            localStorage.setItem('cpf',items.cpf)
            localStorage.setItem('bairro',items.bairro)
            localStorage.setItem('endereco',items.endereco)
            localStorage.setItem('telefone',items.telefone)

            setTimeout(() => navigate(`/${localStorage.getItem('id')} `),1000);
            
            return setSuccess(true)
          } 


        })


      })  
      .then(() => {

        data.map((items) => {

       
        if(items.user !== user && items.password !== password) {
        console.log('Email ou senha incorretos!!')
      setTimeout(() => window.location.reload(),1000);
      return setError(false)
        }  
    })
     
    })


  }



  return (
    <>






      <section className="vh-100 container-user">
        <div className="container-fluid h-custom divLogin">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="/logo.png"
                className="img-fluid img-user" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleClick}>

                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start container-p-user">
                  <p className="lead fw-normal mb-0 me-3 p-user">Faça o seu login</p>


                </div>




                <div className="form mb-4">
                  <input type="email"  pattern=".+@gmail\.com"   required id="user" name="user"
                    className="form-control form-control-lg input-user"
                    placeholder="Entre um email válido" onChange={((e) => {
                      setUser(e.target.value)
                    })} />

                </div>


                <div className="form mb-3">
                  <input type="password"  minLength="8" maxLength="8" id="password" name="password" required className="form-control form-control-lg input-user"
                    placeholder="Entre sua senha" onChange={((e) => {
                      setPassword(e.target.value)
                    })} />

                </div>



                <div className="text-center text-lg-start mt-4 pt-2">

                  <button  className="btn btn-primary btn-lg button-user"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>



                  <p className="small fw-bold mt-2 pt-1 mb-0 " >Não possui uma conta? <Link
                    className=" link-user" to="/registrar">Registrar-se</Link></p>
                </div>

                     {success && (
                    <div className="alert alert-success success-user" role="alert">
                    <BiWinkTongue className="icon-user"></BiWinkTongue> Logado com sucesso!!
                    </div>

                  )} 
                  
                  {!error && !success && (

                    <div className="alert alert-danger error-user" role="alert">
                    <BiDizzy className="icon-user"></BiDizzy> Login ou senha incorretos!!
                  </div>

                  )}

              </form>
            </div>
          </div>
        </div>



      </section>









    </>

  )

}




export default User;