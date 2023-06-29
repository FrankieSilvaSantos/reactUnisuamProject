import { useEffect, useState } from 'react'
import './Carreiras2.css'
import './CarreirasSearch.css'
import axios from "axios";
import { GiBleedingEye } from "react-icons/gi";
import { GiSharpSmile } from 'react-icons/gi'
import { GiSkullCrossedBones } from 'react-icons/gi'

function Carreiras2() {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    const [selectQuery, setSelectQuery] = useState()


    const [active, setActive] = useState(false)
    const [descricao, setDescricao] = useState(false)
    const [gif, setGif] = useState(false)



    function handleDescricao() {


        setDescricao(true)

        setGif(true)

        // setTimeout(() => setGif(true),1000);
    }



    function buscar(e) {
        e.preventDefault()



        axios.get('http://localhost:5000/vagas')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
            }, [])

            .then(() => {
                setActive(true)
            })



    }


    return (



        <>


            <div className=''>

                <form onSubmit={buscar} className='container-all-carreiras2'>

                    <div className='container-form-carreiras2'>
                        <div className="form ">
                            <i className="fa fa-search search-style" aria-hidden="true"></i>
                            <input type="text" id='buscar' name='buscar' className="form-control form-input" placeholder="Busque sua vaga" onChange={((e) => {
                                setQuery(e.target.value)
                                if (document.hasFocus('buscar')) {
                                    setActive(false)
                                }
                            })} />
                            <span className="left-pan"> <i className="fa-solid fa-ghost" style={{ color: "#000000" }}></i></span>
                        </div>

                        <div>
                            <select defaultValue={'default'} id='select' name='select' className="form-select select-carreiras2"
                                aria-label="Default select example " onChange={((e) => {
                                    setSelectQuery(e.target.value)
                                    if (document.hasFocus('select')) {
                                        setActive(false)
                                    }
                                })}>
                                <option className='' value={'default'} disabled>Selecione uma opção</option>
                                <option className='option-carreiras2' value="Rio de Janeiro">Rio de Janeiro</option>
                                <option className='option-carreiras2' value="São Paulo">São Paulo</option>

                            </select>
                            <button className="btn btn-primary btn-lg button-carreiras2">Buscar</button>
                        </div>
                    </div>
                    <section className='container-list-carreiras2'>
                        <section className='container-titulo-carreiras2'>
                            <h1 className='titulo-vagas-carreiras2'>Vagas Abertas</h1>
                        </section>

                        <section>
                            {active && (
                                <ul class="list-group list-group-light">
                                    {data.filter((vagas,) => vagas.vagas_nome.toLowerCase().includes(query) && vagas.cidade.includes(selectQuery)).map((items) => {











                                        return <li class="list-group-item list-carreiras2">
                                            <section className='section-list-carreiras2'>
                                                <section >
                                                    <h3>{items.vagas_nome}</h3>
                                                    <p>{items.cidade}</p>
                                                </section>
                                                <section className='container-button-carreiras22'>
                                                    <button className="btn btn-primary btn-lg button-carreiras22" onClick={() => {
                                                        // setDescricao(true)

                                                        setGif(true)
                                                        setTimeout(() => {
                                                            setDescricao(true)
                                                            setGif(false)
                                                        }, 2000);


                                                    }}
                                                    ><span className='button-span-carreiras2'>Descrição</span> <GiBleedingEye className='icon-carreiras2'></GiBleedingEye></button>
                                                    <button className="btn btn-primary btn-lg button-carreiras22"
                                                    ><span className='button-span-carreiras2'>Vagas {items.vagas_qtd}</span> <GiSharpSmile className='icon-carreiras2b'></GiSharpSmile></button>


                                                    {descricao && (
                                                        <div className='container-descricao-carreiras2'>
                                                            <button onClick={() => {
                                                                setDescricao(false)
                                                            }} className="btn btn-primary btn-lg button-carreiras22 button-descricao-carreiras2"
                                                            ><span className='button-span-carreiras2 button-span-descricao-carreiras2'>Fechar</span> <GiSkullCrossedBones className='icon-descricao-carreiras2'></GiSkullCrossedBones></button>
                                                            <p className='p-descricao-carreiras2'>{items.descricao}</p>

                                                        </div>

                                                    )}






                                                </section>
                                            </section>
                                        </li>

                                    })}

                                </ul>
                            )}

                        </section>

                    </section>
                </form>
                {gif && (
                    <img className='rounded-circle gif-carreiras2' src='/img/carreiras/carreiras.gif'></img>

                )}




            </div>


        </>
    )
}

export default Carreiras2