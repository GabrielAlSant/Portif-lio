import './cards.css'

export default function Cards(){
    return(
           <div className='cards'>
             <div className="card">
        <div className='content'>
        <div className="cardname">Site de Produtos</div>
         <div className="cardresume">Site feito com Front-End feito em React, que conta com sistema de Login Utilizando o Banco de Dados da Google(Firebase), Back-End desenvolvido em Node.js/Postgres</div>
          <a href='https://sites-produtos-react.vercel.app'><div className="cardlink">Ver Aplicação</div></a>
          <a href='https://github.com/GabrielAlSant/Sites-Produtos-React'><div className="cardlink">Ver Código do Front-end</div></a>
          <a href='https://github.com/GabrielAlSant/BD-Produtos'><div className="cardlink">Ver Código do Back-end</div></a>
        </div>
        </div>

        <div className='card'>
        <div className='content'>
        <div className="cardname">Site de Produtos, com clientes, vendas e funcionários</div>
         <div className="cardresume">Site feito com Front-End feito em Nextjs, que conta com a manipulação de imagens e banco de dados relacional, Back-End desenvolvido em Node.js/Postgres</div>
          <a href='https://mysistemstore.vercel.app'><div className="cardlink">Ver Aplicação</div></a>
          <a href='https://github.com/GabrielAlSant/FrontEnd-ProjetoNextJSSequelize-PDF'><div className="cardlink">Ver Código do Front-end</div></a>
          <a href='https://github.com/GabrielAlSant/BackEnd-WebSite-PDFandIMG--NEXTjs-Sequelize-express-'><div className="cardlink">Ver Código do Back-end</div></a>
        </div>
        </div>
        </div>

    )
}