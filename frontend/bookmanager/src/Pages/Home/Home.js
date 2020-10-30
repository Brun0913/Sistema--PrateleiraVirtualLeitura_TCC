import React from 'react'
import { useState } from 'react';
import './Home.css'
import {useHistory} from 'react-router-dom'

import Services from '../Services/SistemaPrateleira'

import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home(){

    const api = new Services();
    const history = useHistory();

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const Logar = async() => {

        try{
        const x = await api.Logar({
            email:email,
            senha:senha
        });
        
        if (x.perfil === "cliente")
            history.push({
                pathname:"/menucliente",
                state:x
            });

        else if(x.perfil === "funcionario")
            history.push({
                pathname:"/menufuncionario",
                state:x
            });
        
        else if(x.perfil === "gerente")
            history.push(
                {
                    pathname:"/menugerente",
                    state:x
                }
            );
        }
        catch(ex)
        {
            if(ex.response.data.codigo)
            toast.dark("😵 " + ex.response.data.motivo);
            else
            toast.error("😔 Tente Novamente mais tarde")
        }
    }

    return (
        <body className="white">
            
            <div className="telainicial">

                <div className="container7">
                    <div className="tituloinicial" >
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

                    <div className="acao">
                        <button onClick={Logar} className="btn btn-outline-success">Logar</button>
                    </div>

                    <div className="acao2">
                        <a href="/criarconta" className="btn btn-dark" >Criar conta</a>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </body>
    );
}