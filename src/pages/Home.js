import { Link } from "react-router-dom";
import './Home.css'


function Home() {

    return (

        <>
            <main>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./img/index/pabx2.png"
                                className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/index/internet-dedicada.png"
                                className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/index/CEL-EMPRESARIAL-2-1.png"
                                className="d-block w-100" alt="..." />
                        </div>

                        <div className="carousel-item">
                            <img src="./img/index/banner-cel-empresarial-telecall-min.png"
                                className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>




                <div className="container cardContainer d-flex justify-content-center">
                    <div className="row d-flex justify-content-center cardContainer2 ">
                        <div className="card" style={{width:"18rem"}}>
                            <img src="./img/index/globe-solid.svg" className="card-img-top saibaMais-img" alt="..." height="150px" />
                            <div className="card-body">
                                <h5 className="card-title">Internet</h5>
                                <p className="card-text">Solução de internet em Fibra com alta qualidade e disponibilidade. <br></br><br></br></p>
                                <a href="#" className="btn button-saibaMais">Saiba mais</a>
                            </div>
                        </div>
                        <div className="card" style={{width:"18rem"}}>
                            <img src="./img/index/telefonia.svg" className="card-img-top saibaMais-img" alt="..." height="150px" />
                            <div class="card-body">
                                <h5 class="card-title">Telefonia</h5>
                                <p class="card-text">Solução inteligente de PABX IP na núvem para sua telefonia fixa. <br></br><br></br></p>
                                <a href="#" className="btn button-saibaMais">Saiba mais</a>
                            </div>
                        </div>
                        <div class="card" style={{width:"18rem"}}>
                            <img src="./img/index/mobile-solid.svg" class="card-img-top saibaMais-img" alt="..." height="150px" />
                            <div className="card-body">
                                <h5 className="card-title">Mobilidade</h5>
                                <p className="card-text">Monte planos de celular personalizados para a sua empresa e pague apenas pelo
                                    que precisa.
                                    <br></br>
                                </p>
                                <a href="#" className="btn button-saibaMais">Saiba mais</a>
                            </div>
                        </div>


                        <h1 className="tituloPlanosMobilidade">Conheça nossos planos de mobilidade</h1>
                        <div className="container d-flex align-items-center">
                            <div className="row">
                                <div className="col">
                                    <img src="./img/index/Planos-de-celular-empresarial-8.png" className="img-thumbnail"
                                        alt="..." />
                                </div>
                                <div className="col">
                                    <ul className="list-group list-group-flush itemLista ">
                                        <li className="list-group-item itemLista"><img style={{float:"left"}}
                                            src="./img/index/icone-planos-customizaveis-1-2048x2048.png"
                                            width="40px" alt="" srcset="" className="imagemLista1" />PLANOS
                                            CUSTOMIZÁVEIS</li>
                                        <li className="list-group-item itemLista"><img style={{float:"left"}}
                                            src="./img/index/icone-traga-seu-celular-e-aparelho-3-2048x2048.png"
                                            width="40px" alt="" srcset="" className="imagemLista2" />TRAGA SEU
                                            NÚMERO E APARELHO</li>
                                        <li class="list-group-item itemLista"><img style={{float:"left"}}
                                            src="img/index/icone-receba-seu-chip-na-sua-empresa-2.png"
                                            width="40px" alt="" srcset="" className="imagemLista3" />RECEBA SEU
                                            CHIP NA SUA EMPRESA</li>
                                        <li class="list-group-item itemLista"><img style={{float:"left"}}
                                            src="img/index/icone-maior-rede-movel-do-brasil-2-2048x2048.png"
                                            width="40px" alt="" srcset="" className="imagemLista4" />MAIOR REDE
                                            MÓVEL DO BRASIL</li>
                                        <li className="list-group-item itemLista"><img style={{float:"left"}}
                                            src="img/index/icone-atendimento-diferenciado-1.png" width="40px"
                                            alt="" class="imagemLista5" />ATENDIMENTO DIFERENCIADO</li>
                                    </ul>
                                </div>



                                <section className="pt-5 pb-5">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <h3 className="mb-3 tituloEventos">Próximos Eventos </h3>
                                            </div>
                                            <div className="col-6 text-right">
                                                <Link className="btn button-saibaMais button-card-positioning mb-3 mr-1" role="button" data-bs-slide="prev"
                                                    to="#carouselExampleIndicators1">
                                                    <i className="fa fa-arrow-left"></i>
                                                </Link>
                                                <Link className="btn button-saibaMais mb-3 " role="button" data-bs-slide="next"
                                                    to="#carouselExampleIndicators1">
                                                    <i className="fa fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                            <div className="col-12">
                                                <div id="carouselExampleIndicators1" className="carousel slide"
                                                    data-bs-ride="carousel">

                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <div className="row">

                                                                <div className="col-md-4 mb-3">



                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/Expo-ISP-10-12.05.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">EXPOISP BRASIL OLINDA 2023</h4>
                                                                            <p className="card-text titulo-card">10 a 12 de maio</p>

                                                                        </div>

                                                                    </div>

                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/Abrint-24-a-26.05.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">Abrint Encontro Nacional 2023
                                                                            </h4>
                                                                            <p className="card-text titulo-card">24 a 25 de maio</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/ITW-14-a-17.05.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">ITW International Telecoms Week
                                                                                2023</h4>
                                                                            <p className="card-text titulo-card">14 a 17 de maio</p>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="row">


                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/gccm.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">GCCM Rio de Janeiro <br></br><br></br> </h4>
                                                                            <p className="card-text titulo-card">30 a 31 de agosto</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/ITW-14-a-17.05.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">ITW International Telecoms Week
                                                                                2023</h4>
                                                                            <p className="card-text titulo-card">14 a 17 de maio</p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/cardsImages/Abrint-24-a-26.05.png" />
                                                                        <div className="card-body">
                                                                            <h4 className="card-title titulo-card">Abrint Encontro Nacional 2023
                                                                            </h4>
                                                                            <p className="card-text titulo-card">24 a 25 de maio</p>

                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <h1 className="tituloMapaCard">Presença em todo Rio de Janeiro</h1>

                                <div className="container">
                                    <div className="card text-bg-dark ">
                                        <img src="img/index/mapa-fibra-rj.png" class="card-img" alt="..." />

                                        <div className="card-img-overlay containerMapaCard   ">
                                            <div className="containerMapaCard2">
                                                <h5 className="card-title tituloMapaCard">+ 800km de rede no Rio de Janeiro</h5>
                                                <p className="card-text textoMapaCard" style={{ color: "black" }}>Soluções de acesso que
                                                    possibilitam as empresas
                                                    a se <br></br>
                                                    conectarem a internet com a máxima qualidade,<br></br> disponibilidade e segurança
                                                </p>

                                                <a href="#" className="btn btn-primary button-saibaMais button-saibaMais-positioning">Saiba Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <section className="pt-5 pb-5 ">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <h3 className="mb-3 tituloEventos tituloClientes2">Nossos Clientes
                                                    Os Que Acreditam Nos Nossos Serviços </h3>
                                            </div>
                                            <div className="col-6 text-right">
                                                <a class="btn button-saibaMais button-card-positioning22 mb-3 mr-1" role="button" data-bs-slide="prev"
                                                    href="#carouselExampleIndicators3">
                                                    <i className="fa fa-arrow-left"></i>
                                                </a>
                                                <a className="btn button-saibaMais mb-3 button-card-positioning2" role="button" data-bs-slide="next"
                                                    href="#carouselExampleIndicators3">
                                                    <i className="fa fa-arrow-right"></i>
                                                </a>
                                            </div>
                                            <div className="col-12 ">
                                                <div id="carouselExampleIndicators3" className="carousel slide"
                                                    data-bs-ride="carousel">

                                                    <div className="carousel-inner container-cards-home">
                                                        <div className="carousel-item active">
                                                            <div className="row">

                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/clientes/czechTeam.png"
                                                                            width="200px" height="200px" />
                                                                        <div class="card-body">
                                                                            <h4 class="card-title titulo-card">Czech Team</h4>
                                                                            <p className="card-text">"Equipe e visitantes da casa da
                                                                                <br></br>
                                                                                República Tcheca durante os Jogos <br></br> Olímpicos Rio
                                                                                2016 ficaram muito <br></br>
                                                                                felizes. Os serviços prestados pela <br></br>
                                                                                Telecall foram um sucesso, <br></br>
                                                                                agradecemos toda a ajuda"</p>
                                                                            <span className="clientesNomeSpan">Blanka Konečná
                                                                                <br></br></span>
                                                                            <span class="clientesTextoSpan">Project manager</span>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/clientes/avmedia.png"
                                                                            width="200px" height="200px" />
                                                                        <div className="card-body container-cards-home">
                                                                            <h4 className="card-title titulo-card">AVMEDIA</h4>
                                                                            <p className="card-text">"Gostariamos de agradecer a
                                                                                Telecall por <br></br>
                                                                                toda a ajuda nos serviços prestados. Tudo <br></br>
                                                                                funcionou bem e os ténicos foram <br></br> muito
                                                                                prestativos"</p>
                                                                            <span class="clientesNomeSpan">Michal Matko <br></br></span>
                                                                            <span class="clientesTextoSpan">AVMEDIA, a.s.</span>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/clientes/progolf.png"
                                                                            width="200px" height="200px" />
                                                                        <div className="card-body container-cards-home">
                                                                            <h4 className="card-title titulo-card">Progolf</h4>
                                                                            <p className="card-text">Gostaríamos de agradecer a
                                                                                Telecall pelo <br></br>
                                                                                trabalho maravilhoso que realizaram. O <br></br>
                                                                                trabalho da equipe é sensacional, com <br></br>
                                                                                rapidez e atenção... parabéns a toda <br></br>
                                                                                equipe da Telecall e muito obrigada</p>

                                                                            <span className="clientesNomeSpan">Suelen Santos
                                                                                <br></br></span>
                                                                            <span className="clientesTextoSpan">PROGOLF - CAMPO DE
                                                                                GOLFE OLÍMPICO - <br></br>
                                                                                BARRA DA TIJUCA</span>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <div className="row">


                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/clientes/sls.png"
                                                                            width="200px" height="200px" />
                                                                        <div className="card-body container-cards-home">
                                                                            <h4 className="card-title titulo-card">SLS <br></br><br></br></h4>
                                                                            <p className="card-text">" Fantástico trabalho da equipe
                                                                                Telecall. <br></br>
                                                                                Profissionais completamente <br></br>
                                                                                comprometidos. Uma entrega perfeita. " </p>
                                                                            <span className="clientesNomeSpan">Leonardo Coehen
                                                                                <br></br></span>
                                                                            <span className="clientesTextoSpan">SLS World Championship
                                                                                Finals 2018</span>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 mb-3">
                                                                    <div class="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="./img/clientes/rock-in-rio.png"
                                                                            width="200px" height="200px" />
                                                                        <div className="card-body container-cards-home">
                                                                            <h4 className="card-title titulo-card">Rock in Rio</h4>
                                                                            <p className="card-text">“É com o coração transbordando de
                                                                                <br></br>
                                                                                orgulho e gratidão que concluímos <br></br>
                                                                                uma edição do Rock in Rio. Toda a <br></br>
                                                                                magia que vivemos nesses 7 dias de <br></br>
                                                                                festival jamais seria possível sem a <br></br>
                                                                                participação de marcas e <br></br>
                                                                                profissionais como vocês que <br></br>
                                                                                acreditaram na gente e ajudaram a <br></br>
                                                                                tornar esse sonho realidade. A <br></br>
                                                                                edição 2017 ficará para a história e <br></br>
                                                                                agora nosso desafio é ainda maior. <br></br>
                                                                                Fica aqui mais uma vez, o nosso <br></br>
                                                                                muito obrigada e que venha 2019!!” </p>
                                                                            <span className="clientesNomeSpan">Laila Dias <br></br></span>
                                                                            <span className="clientesTextoSpan">Account Executive -
                                                                                Brasil</span>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 mb-3">
                                                                    <div className="card">
                                                                        <img className="img-fluid" alt="100%x280"
                                                                            src="img/clientes/maratona.jpg"
                                                                            width="200px" height="200px" />
                                                                        <div className="card-body container-cards-home">
                                                                            <h4 className="card-title titulo-card">Rio Maratona</h4>
                                                                            <p className="card-text">"A operação foi um sucesso, a <br></br>
                                                                                transmissão correu como desejado, <br></br>
                                                                                graças à Telecall. Agradecemos a <br></br> atenção, o
                                                                                cuidado e o esforço de <br></br>
                                                                                toda a equipe com o nosso produto... <br></br>
                                                                                Muito obrigado e parabéns pelo <br></br>
                                                                                excelente trabalho. Para nós, foi um <br></br>
                                                                                novo padrão de entrega e operação <br></br>
                                                                                excepcional ". </p>
                                                                            <span className="clientesNomeSpan">Pedro Pereira
                                                                                <br></br></span>
                                                                            <span className="clientesTextoSpan">Diretoria de
                                                                                Projetos</span>


                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <form className="container d-flex justify-content-center gap-5">



                                    <div className="">

                                        <div className="container text-center">
                                            <h1 className="tituloContato">Fale Conosco</h1>

                                            <p className="p-home">Para qualquer informação, dúvida ou comentário: <br></br>


                                                (21) 3030-1010

                                                0800 030 2016
                                            </p>


                                        </div>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form">
                                                    <input type="text" pattern="[A-Z a-z]+" minlength="8" maxlength="25" id="nome" name="nome" className="form-control input-user" />
                                                    <label className="form-label p-home" htmlFor="nome">Nome</label>
                                                </div>
                                            </div>

                                            <div className="form ">
                                                <input type="text" pattern="[A-Z a-z]+" minlength="8" maxlength="25" id="empresa" name="empresa" class="form-control input-user" />
                                                <label className="form-label p-home" htmlFor="empresa">Empresa</label>

                                            </div>
                                        </div>


                                        <div className="form">
                                            <input type="tel" pattern="[0-9]{2}[0-9]{2}[0-9]{4}[0-9]{4}" placeholder="(+xx) xx-xxxx-xxxxx" id="telefone" name="telefone" class="form-control input-user" />
                                            <label className="form-label p-home" htmlFor="telefone">Telefone</label>
                                        </div>





                                        <div className="form">
                                            <input type="email" pattern=".+@gmail\.com" id="email" name="email" className="form-control input-user" placeholder="xxxx@gmail.com" />
                                            <label className="form-label p-home" htmlFor="email">Email</label>
                                        </div>





                                        <div className="form">
                                            <textarea className="form-control input-user" id="mensagem" name="mensagem" rows="4"></textarea>
                                            <label className="form-label p-home" htmlFor="mensagem">Mensagem</label>
                                        </div>






                                        <div class="form-check d-flex justify-content-lg-start mb-4">

                                            <input class="form-check-input check-user" type="checkbox" value="checked"
                                                id="checkbox"
                                                name="checkbox" style={{marginTop:"12px"}} />
                                            <label className="form-check-label p-home" style={{marginTop:"7px"}} htmlFor="checkbox">Confirmar </label>

                                            <div className="mb-3">
                                                <select className="form-select input-user" id="tipo_suporte" name="tipo_suporte" required aria-label="Default select example" style={{marginLeft:"20px"}}>
                                                    <option selected>-- Seleciona uma opção --</option>



                                                    <option value="comercial">Comercial</option>
                                                    <option value="suportecnico">Suporte Técnico</option>
                                                    <option value="administrativoFinanceiro">Administrativo / Financeiro</option>
                                                    <option value="outros">Outros</option>
                                                </select>
                                            </div>

                                        </div>






                                        <button  className="btn button-saibaMais2 btn-block mb-4">Enviar</button>

























                                    </div>



                                    <div className="containerContato2">
                                        <h1 className="tituloContato">Escritório</h1>
                                        <h4 className="p-home">Brasil</h4>
                                        <p className="p-home">
                                            Centro empresarial Mario Henrique Simonsen <br></br>
                                            Av. das Américas, 3434 | Bloco 1, Sala 505 <br></br>
                                            Barra da Tijuca | Rio de Janeiro, RJ</p>
                                        <h4 className="p-home">Estados Unidos</h4>
                                        <p className="p-home">
                                            848 Brickell Av – Suite 1235 | Miami, Florida, USA – 33131</p>
                                        <h4 className="p-home">Portugal</h4>
                                        <p className="p-home">
                                            Avenida da Liberdade nº 245, 4º piso, sala 402 | Lisboa, Portugal 1250-143</p>
                                        <h4 className="p-home">Inglaterra</h4>
                                        <p className="p-home">
                                            8 Devonshire Squae, Londom EC2M 4YJ</p>
                                        <h4 className="p-home">Contatos</h4>
                                        <p className="p-home">
                                            Email: suporte@telecall.com <br></br>
                                            Tel: (21) 3030-1010 <br></br>
                                            Wpp: (21)93618-0100</p>
                                        <h4 className="p-home">Carreiras</h4>
                                        <p className="p-home">
                                            <Link className="link-home" to="/home/carreiras">Clique aqui</Link> para verificar as vagas disponíveis.
                                        </p>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;