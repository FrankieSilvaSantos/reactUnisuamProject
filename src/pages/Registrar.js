import { useEffect, useState } from 'react';
import './Registrar.css'
import axios from 'axios';
import { BiWinkTongue } from 'react-icons/bi'
import {BiDizzy} from 'react-icons/bi'

function Registrar() {

    const [data,setData] = useState([])


    const [nome,setNome] = useState()
    const [nome2,setNome2] = useState()

    const [sobrenome,setSobrenome] = useState()
    const [sobrenome2,setSobrenome2] = useState()

    const [email,setEmail] = useState()
    const [email2,setEmail2] = useState()

    const [error,setError] = useState()
    const [success,setSuccess] = useState()
    

    const [password,setPassword] = useState()
    const [password2,setPassword2] = useState()

    const [cpf,setCpf] = useState()
    const [cpf2,setCpf2] = useState()

    const [bairro,setBairro] = useState()
    const [bairro2,setBairro2] = useState()

    const [endereco,setEndereco] = useState()
    const [endereco2,setEndereco2] = useState()

    const [telefone,setTelefone] = useState()
    const [telefone2,setTelefone2] = useState()

    const [checkbox,setCheckbox] = useState()
    const [checkbox2,setCheckbox2] = useState()

    
    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    },[])

    const controller = new AbortController();

    function cadastrar(e) {
        e.preventDefault()
       

        const existingData = data.find(
            (item) => item.email === email || item.cpf === cpf || item.telefone === telefone 
            || item.endereco === endereco
          );
      
          if (existingData) {
            setError(true);
            setTimeout(() => {
              setError(false);
              window.location.reload()
            }, 3000);
            return;
          }

        axios.post('http://localhost:5000/users',{
          nome,
          sobrenome,
          email,
          password,
          cpf,
          bairro,
          endereco,
          telefone,
          checkbox

        })
   

    .then(() => {
        setNome2(nome)
        setSobrenome2(sobrenome)
        setEmail2(email)
        setPassword2(password)
        setCpf2(cpf)
        setBairro2(bairro)
        setEndereco2(endereco)
        setTelefone2(telefone)
        setCheckbox2(checkbox)
        setSuccess(true)
        setTimeout(() => window.location.reload(), 2000);
    })

   
}
    


    return(

        
    

    <>

        <section className='container-form-registrar2'>
        <section className='container-form-registrar'>

          <section className='container-img-registrar'> 
        <img src='img/registrar/Registrar.jpg' className='img-registrar' height={'500px'}  className='img-registrar' ></img>
        </section>
        <div className='border-registrar'>

        </div>
        
        <section className="">


        <form onSubmit={cadastrar} className='form-registrar'>

            <div className='container-input'>
  
  <div className="row mb-4">
    <div className="col">
      <div className="form">
        <input type="text" id="form3Example1" name='nome' placeholder='Digite seu nome' 
        pattern="[A-Z a-z]+" minLength="3" maxLength="10" 
        className="form-control input-user" onChange={((e) => {
            setNome(e.target.value)
        })} required/>
        <label className="form-label label-registrar" htmlFor="nome">Nome</label>
      </div>
    </div>
    <div className="col">
      <div className="form">
        <input type="text" id="sobrenome" name='sobrenome' placeholder='Digite seu sobrenome' 
        pattern="[A-Z a-z]+" minLength="4" maxLength="25" 
        className="form-control input-user" onChange={((e) => {
            setSobrenome(e.target.value)
        })} required/>
        <label className="form-label label-registrar" htmlFor="sobrenome">Sobrenome</label>
      </div>
    </div>
  </div>


  <div class="form mb-4">
    <input type="email" pattern=".+@gmail\.com" placeholder="xxxx@gmail.com" id="email" name='email' 
    className="form-control input-user" onChange={((e) => {
        setEmail(e.target.value)
    })} required/>
    <label className="form-label label-registrar" htmlFor="email">Endereço de Email</label>
  </div>
  <div class="form mb-4">
    <input type="password" minLength="8" maxLength="8" placeholder="Digite sua senha" id="password" 
    name='password' className="form-control input-user" onChange={((e) => {
        setPassword(e.target.value)
    })} required/>
    <label className="form-label label-registrar" htmlFor="password">Senha</label>
  </div>


        <div>
  <div class="form mb-4">
    <input type="text" pattern="[0-9]+" placeholder='xxx.xxx.xxx-xx' minLength={11}  maxLength={11} 
    id="cpf" name='cpf' className="form-control input-user" onChange={((e) => {
        setCpf(e.target.value)
    })} required/>
    <label className="form-label label-registrar" htmlFor="cpf">CPF</label>
  </div>

  <div class="form mb-4">
    <input type="text" pattern="^[a-z A-Z ]+" placeholder="Digite seu Bairro" id="bairro" 
    name='bairro' className="form-control input-user" onChange={((e) => {
        setBairro(e.target.value)
    })} required/>
    <label className="form-label label-registrar" htmlFor="bairro">Bairro</label>
  </div>

  <div class="form mb-4">
    <input type="text" pattern="^[a-z A-Z0-9 ]+" placeholder="Digite o seu endereço" id="endereco" 
    name='endereco' className="form-control input-user" onChange={((e) => {
        setEndereco(e.target.value)
    })} required/>
    <label className="form-label label-registrar" htmlFor="endereco">Endereço</label>
  </div>


  <div class="form mb-4">
    <input type="tel" pattern="[0-9]{2}[0-9]{2}[0-9]{4}[0-9]{5}" maxLength={13} 
    placeholder="(+xx) xx-xxxx-xxxxx" id="telefone"  name='telefone'
    className="form-control input-user" onChange={((e) => {
        setTelefone(e.target.value)
    })} />
    <label className="form-label label-registrar" htmlFor="telefone">Telefone</label>
  </div>
  </div>
  

  </div>
  <div class="form-check d-flex justify-content-start mb-4">
    <input className="form-check-input me-2 check-user" type="checkbox" value="checked" 
    id="checkbox" name='checkbox' required  onChange={((e) => {
        setCheckbox(e.target.value)
    })}/>
    <label className="form-check-label label-registrar" htmlFor="checkbox">
      Confirmar
    </label>

  </div>

  <button   type='submit' className="btn btn-primary btn-block mb-4 button-registrar2">Registrar</button>

    {error && (

<div class="alert alert-danger" role="alert">
<BiDizzy className="icon-user"></BiDizzy> Campos existentes

</div>
    ) }
       
    

      { nome2 && sobrenome2 && email2 && password2 && cpf2 && bairro2 && endereco2 && telefone2 && checkbox2 && !error &&(


    
        < div className="alert alert-success success-home" role="alert">
        <BiWinkTongue className="icon-home"></BiWinkTongue> Informações enviadas com sucesso!!
    </div>
    )} 

</form>

        </section>

        </section>
        </section>
    </>
)
}

export default Registrar;