import './About.css'

function About() {

    return(

        <>
        <section className='container-img-about'>
            <section>
            <section>
        <img className="img-about" src="/img/about/about.jpg"></img>
        </section>
        <section>
        <div className='border-img-about'></div>
        </section>
        </section>
        </section>

        <section className='container-text-about'>

        <section className='text-about'>
            <h1 className='titulo-about'>Nossa Empresa</h1>
            <p className='p-about'>Telecall é uma operadora regulada pela ANATEL (Licenças SCM, STFC e SMP), 
                proprietária de uma rede de fibra de alta capacidade, oferecendo a seus clientes o mais 
                alto padrão de qualidade, velocidade e acessibilidade em soluções telefônicas e de internet.</p>

                <div className='border-text-about1'></div>
        </section>



        <section className='text-about'>
        <h1 className='titulo-about'>Nossa Missão</h1>
            <p className='p-about'>Garanta os melhores serviços e custos otimizados para sua empresa, 
                com toda mobilidade e segurança que só a Telecall oferece para você no mercado.</p>

                <div className='border-text-about2'></div>
        </section>

        <section className='text-about'>
        <h1 className='titulo-about'>Nossa Visão</h1>
            <p className='p-about'>Ser reconhecida pela busca constante em soluções de comunicações diferenciadas 
                com mobilidade e ajudando na produtividade das empresas.</p>

                <div className='border-text-about3'></div>


        </section>


        <section>
        <h1 className='titulo-about'>Ser Telecall</h1>
            <p className='p-about'>Ser Telecall é a busca constante do aperfeiçoamento, é ver o futuro 
                como meta presente e ser um time com competitividade e produtividade no sangue.</p>

                
        </section>


        </section>
        </>

    )
}

export default About;