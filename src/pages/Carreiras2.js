import './Carreiras2.css'
import './CarreirasSearch.css'
import { FaSistrix } from 'react-icons/fa'

function Carreiras2() {

    return (



        <>
         
                <div className="container ">

              

                    <div className="row height d-flex justify-content-center align-items-center ">

                            
                        <div className="col-md-6 ">


                        <div className=''>
                            <div className="form ">
                                <i className="fa fa-search search-style" aria-hidden="true"></i>
                                <input type="text" className="form-control form-input" placeholder="Busque sua vaga" />
                                <span className="left-pan"> <i className="fa-solid fa-ghost" style={{ color: "#000000" }}></i></span>
                            </div>

                            <div>
                            <select defaultValue={'default'} className="form-select select-carreiras2" aria-label="Default select example ">
                                <option className='' value={'default'} disabled>Selecione uma opção</option>
                                <option className='option-carreiras2' value="Rio de Janeiro">Rio de Janeiro</option>
                                <option className='option-carreiras2' value="São Paulo">São Paulo</option>
                               
                            </select>
                            </div>
                            </div>
                          
                        </div>
                        </div>
                    </div>

            

            
        </>
    )
}

export default Carreiras2