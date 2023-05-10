import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/header'
import About from '../../components/about'
import Exp from '../../components/exp'
import Contact from '../../components/contato'
import Cards from '../../components/projetos'

export default function Home() {
  return (
   <div>
    <Header />
    <About />
    <Exp />
    <Contact />
    <Cards />
   </div>
  )
}
