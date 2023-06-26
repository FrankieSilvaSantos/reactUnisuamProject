import './Registrar.css'

function Registrar() {

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


        <form className='form-registrar'>

            <div className='container-input'>
  
  <div className="row mb-4">
    <div className="col">
      <div className="form">
        <input type="text" id="form3Example1" name='nome' placeholder='Digite seu nome' pattern="[A-Z a-z]+" minLength="3" maxLength="10" class="form-control input-user"required/>
        <label className="form-label label-registrar" htmlFor="form3Example1">Nome</label>
      </div>
    </div>
    <div className="col">
      <div className="form">
        <input type="text" id="sobrenome" name='sobrenome' placeholder='Digite seu sobrenome' pattern="[A-Z a-z]+" minLength="8" maxLength="25" className="form-control input-user" required/>
        <label className="form-label label-registrar" htmlFor="form3Example2">Sobrenome</label>
      </div>
    </div>
  </div>


  <div class="form mb-4">
    <input type="email" pattern=".+@gmail\.com" placeholder="xxxx@gmail.com" id="email" name='email' className="form-control input-user" required/>
    <label className="form-label label-registrar" htmlFor="form3Example3">Endereço de Email</label>
  </div>

        <div>
  <div class="form mb-4">
    <input type="text" pattern="[0-9]+" placeholder='xxx.xxx.xxx-xx' minLength={11}  maxLength={11} id="cpf" name='cpf' className="form-control input-user" required/>
    <label className="form-label label-registrar" htmlFor="form3Example3">CPF</label>
  </div>

  <div class="form mb-4">
    <input type="text" pattern="([\w\W]+)\s(\d+)" placeholder="Digite seu Bairro" id="bairro" name='bairro' className="form-control input-user" required/>
    <label className="form-label label-registrar" htmlFor="form3Example3">Bairro</label>
  </div>

  <div class="form mb-4">
    <input type="text" pattern="([\w\W]+)\s(\d+)" placeholder="Digite o seu endereço" id="endereco" name='endereco' className="form-control input-user" required/>
    <label className="form-label label-registrar" htmlFor="endereco">Endereço</label>
  </div>


  <div class="form mb-4">
    <input type="tel" pattern="[0-9]{2}[0-9]{2}[0-9]{4}[0-9]{5}" maxLength={13} placeholder="(+xx) xx-xxxx-xxxxx" id="form3Example3" className="form-control input-user" />
    <label className="form-label label-registrar" htmlFor="form3Example3">Telefone</label>
  </div>
  </div>
  

  </div>
  <div class="form-check d-flex justify-content-start mb-4">
    <input className="form-check-input me-2 check-user" type="checkbox" value="checked" id="checkbox" name='checkbox' required  />
    <label className="form-check-label label-registrar" htmlFor="checkbox">
      Confirmar
    </label>

  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4 button-registrar2">Registrar</button>

 
  
</form>

        </section>

        </section>
        </section>
    </>
)
}

export default Registrar;