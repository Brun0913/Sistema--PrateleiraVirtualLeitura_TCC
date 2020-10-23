import React from 'react'
import { useState } from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

import Services from '../Services/SistemaPrateleira'

export default function Home(){

    const api = new Services();

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [menu,setMenu] = useState('');
    const [perfil,setPerfil] = useState('');

    const Logar = async() => {

        const x = await api.Logar({
            email:email,
            senha:senha
        });
        setPerfil(x.perfil)

        if (perfil === "cliente")
            setMenu("/menucliente")

        else if(perfil === "funcionario")
            setMenu("/menufuncionario")
        
        else if(perfil === "gerente")
            setMenu("/menugerente")

        return menu;
    }

    return (
        <div className="white">
            
            <div className="telainicial">

                <div className="container7">
                    <div className="titulo" >
                        <h2>Book Manager: </h2>
                    </div>
                    
                    <div className="input" >
                        <label>Email: </label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>

                    <div className="input2">
                        <label>Senha: </label>
                        <input type="password" onChange={(e) => setSenha(e.target.value)} required></input>
                    </div>

                    <Link onClick={Logar} to={menu} className="btn btn-outline-success acao">Logar</Link> 

                    <div className="acao2">
                        <a href="/criarconta" className="btn btn-dark" >Criar conta</a>
                    </div>
                </div>

            </div>
        </div>
    );
}