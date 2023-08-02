import './exp.css'
import Image  from 'next/image';

export default function Exp(){
    return(
        <main className='mainexp'>
         <div className='dp'>
         <div className='study'>
            <h2>Acadêmico</h2>
         <div>
            <Image alt='' src={'/hat.png'} width={30} height={30} className='iconstudy'/>
            <div className='local'>Ensino Fundamental</div>
            <div className='name'>Escola Estadual Braz Sinigáglia</div>
            <p>Concluído</p>  
         </div>
         <div>
            <Image alt='' src={'/hat.png'} width={30} height={30} className='iconstudy'/>
            <div className='local' style={{marginLeft: -90 + 'px'}}>Ensino Médio</div>
            <div className='name'>Instituto Federal do Mato Grosso do Sul - Campus Nova Andradina com Técnico em Informática Integrado</div>
            <p>Concluído</p>  
         </div>
         <div>
            <Image alt='' src={'/hat.png'} width={30} height={30} className='iconstudy'/>
            <div className='local' style={{marginLeft: -70 + 'px'}}>Ensino Superior</div>
            <div className='name'>Técnico em Análise e Desenvolvimento de Sistemas,  Instituto Federal do Mato Grosso do Sul</div>
            <p>Março 2023 - em andamento</p>  
         </div>
         <div>
            <Image alt='' src={'/hat.png'} width={30} height={30} className='iconstudy'/>
            <div className='local' style={{marginLeft: -75 + 'px'}}>Curso de Inglês</div>
            <div className='name'>Wizard Nova Andradina</div>
            <p>março 2019 - em andamento</p>  
         </div>
         <div>
            <Image alt='' src={'/hat.png'} width={30} height={30} className='iconstudy'/>
            <div className='local' style={{marginLeft: -90 + 'px'}}>Pacote Office</div>
            <div className='name'>Prepara Cursos</div>
            <p>Concluído</p>  
         </div>
            </div>
            <div className='exp'>
            <h2>Experiências</h2>
             
             <div className='expitem'>
              <div className='name'>Técnico em Informática (Estágio), Instituto Federal do Mato Grosso do Sul - Campus Nova Andradina, Fazenda Santa Bárbara, Rodovia MS 473 - KM 23, S/Nº</div>
             <div className='date'>Junho 2021 - Setembro 2021</div>
             <ul>
               <li>Responsável pela manutenção de computadores, seja por Hardware ou Software.</li>
               <li>Organização do setor de trabalho.</li>
               <li>Controle de equipamentos trabalhados.</li>
               <li>Montagem de Kits de periféricos.</li>
             </ul>
             </div>

               
             <div className='expitem'>
              <div className='name'>Vendedor, Nova Mania Variedades (Meio Período),Avenida Brasil 2040, Bairro Centro Batayporã-MS</div>
             <div className='date'>Novembro 2020 - Junho 2021,  outubro 2021 - março 2022</div>
             <ul>
               <li>Responsável por repor produtos.</li>
               <li>Controle de vendas por dia.</li>
               <li>Responsável por indicar e anotar mercadorias em falta.</li>
               <li>Atender Clientes.</li>
             </ul>
             </div>

            </div>
         </div>
        </main>
    )
}