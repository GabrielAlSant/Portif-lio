import './about.css'
import Image from 'next/image'

export default function About(){
    return(
<main className='about'>
<div className='dp'>
<h1>Olá, eu sou o Gabriel</h1>
<p>Desenvolvedor FullStack</p>
<div className='resume'>Durante a minha vida acadêmica já desenvolvi vários sites com vários objetivos, posso dizer que sou um desenvolvedor FullStack por ter a capacidade de desenvolver tanto front quanto back-end, também tendo expêriencias com PWAs. Tenho conhecimento avançado em comandos SQL, trabalhando com bancos MySQL(OracleDB) e PostGres.</div>
<Image alt='' src={"/eu.jpg"} width={250} height={250}></Image>
<br></br>
<a href='/download.pdf' download><button>Currículo <Image src={"/icondownload.png"} width={25} height={25} alt=""  /></button></a>
</div>

</main>
    )
}