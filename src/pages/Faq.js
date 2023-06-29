import './Faq.css'

function Faq() {

    return (

        <>

            <h1 className="titulo-faq">Perguntas frequentes</h1>

            <div className="accordion" id="accordionExampleY">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOneY">
                        <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseOneY" aria-expanded="false" aria-controls="collapseOneY">
                            <i className="fas fa-question-circle fa-sm me-2 opacity-70 icon-faq"></i>Como realizar um teste de velocidade?
                        </button>
                    </h2>
                    <div id="collapseOneY" className="accordion-collapse collapse show icon-faq2" aria-labelledby="headingOneY"
                        data-mdb-parent="#accordionExampleY">
                        <div className="accordion-body">
                            <p className='p-faq'>Acessar o site https://www.speedtest.net
                                Importante o teste ser realizado com o servidor Telecall selecionado.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwoY">
                        <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
                            <i className="fas fa-question-circle fa-sm me-2 opacity-70 icon-faq"></i>O que é a velocidade de download?
                        </button>
                    </h2>
                    <div id="collapseTwoY" className="accordion-collapse collapse" aria-labelledby="headingTwoY"
                        data-mdb-parent="#accordionExampleY">
                        <div className="accordion-body">
                            <p className='p-faq'>É a velocidade do recebimento de dados (exemplo: arquivo, vídeo,
                                streaming etc.) de um computador a partir de outra máquina por meio da internet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeY">
                        <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
                            <i className="fas fa-question-circle fa-sm me-2 opacity-70 icon-faq"></i>O que é a velocidade de upload?
                        </button>
                    </h2>
                    <div id="collapseThreeY" className="accordion-collapse collapse" aria-labelledby="headingThreeY"
                        data-mdb-parent="#accordionExampleY">
                        <div className="accordion-body">
                            <p className='p-faq'>É a velocidade do envio de dados
                                (exemplo: arquivo, vídeo, streaming etc.) de um computador
                                a partir de uma máquina para outra por meio da internet.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThreeY">
                        <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <i className="fas fa-question-circle fa-sm me-2 opacity-70 icon-faq"></i>Quais fatores externos podem influenciar os resultados do teste?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-mdb-parent="#accordionExampleY">
                        <div className="accordion-body">
                            <p className='p-faq'>Para garantir resultados mais precisos é necessário considerar algumas questões:
                                Enquanto o teste estiver em execução, o usuário não deve usar o computador para outras funções, especialmente aplicações que precisam do acesso à internet.
                                Estas aplicações conflitam com o teste e podem gerar um resultado impreciso;
                                Outros aparelhos que utilizem a mesma conexão de internet simultaneamente na rede também podem afetar os resultados;
                                A conexão via cabo de rede entre o computador e o modem é a ideal para a realização do teste.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </>

    )

}

export default Faq