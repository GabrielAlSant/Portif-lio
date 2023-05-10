"use client";
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import './contato.css'

export default function Contact() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")


    const handleEmail = async (e: { preventDefault: () => void; }) =>{
       e.preventDefault();
        if (nome === "" || email === "" || mensagem ===""){
            alert("falto dado")
            return; 
        }
        
        const templateParams = {
            from_name: nome,
            message : mensagem,
            email: email

        }
        emailjs.send("service_z3fc38e", "template_1b2lbc8", templateParams, "89patxfvJBTf4Qa62").then((response)=>{
            alert(nome + ", seu email foi enviado com sucesso")
            console.log("EMAIL RECEIVED", response.status, response.text)
            setEmail("")
            setNome("")
            setMensagem("")
        }, (err)=>{
            alert("O email não foi enviado, tente manualmente pelo gmail, o meu email está disponivel no site, erro:" + err)
            console.log("err", err)
        })
    }

    return (
        <div className="field">
<div className="test">
<div className="titlecontact">Contato</div>
            <form onSubmit={handleEmail}>
          <div className="fieldemail">
          <div className="cont">Envio rápido</div>
          <div className="titlefield">Seu nome</div>
          <input
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            />
          <div className="titlefield">Seu email</div>
             <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <div className="titlefield">Sua mensagem</div>
            <textarea
            className="msg"
            value={mensagem}
            onChange={(e)=>setMensagem(e.target.value)}
            />
            <br></br>
            <button className="buttonemail" type="submit">Enviar</button>
          </div>
          <div className="contactfield">
          <div className="cont">Meios de Contato</div>
          <div className='contt'>Número de Telefone: (67) 9 9687-5322</div>
          <div className='cont'>Email: gabrielalvesdossantos16@gmail.com</div>
          </div>
            </form>
</div>
        </div>
    )
}