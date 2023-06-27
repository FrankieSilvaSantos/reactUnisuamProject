import './Carreiras.css'
import { Link } from 'react-router-dom';

function carreiras() {

    return(

        <>  
            

              


        <form>

            <div className='container-all-carreiras'>
        
            <div class="container-texto-carreiras">
  {/* <div class="form">
    <input type="search" id="form1" className="form-control input-user" placeholder='Digite a vaga' />
   
  </div>
  <button type="button" className="btn btn-primary button-carreiras">
    <i class="fas fa-search"></i>
  </button>
</div> */}

<h1 className='titulo-carreiras'>Trabalhe conosco!!</h1>
<p className='p-carreiras'>Explore a primeira operadora de telecomunicações <br></br>
    a integrar o serviço de chamadas verificadas,<br></br> e dessa forma oferecendo 
    uma experiência <br></br>diferenciada de ligações
</p>
<Link to={'/carreiras2'}><button  className="btn btn-primary btn-lg button-user"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Nossas vagas</button></Link>

            </div>


            <div className='container-carreiras2'>
                <img className='img-carreiras' src='/img/carreiras/cartoon2.jpg' ></img>

                </div>

            </div>


            </form>

        </>
    
    )

}

export default carreiras;