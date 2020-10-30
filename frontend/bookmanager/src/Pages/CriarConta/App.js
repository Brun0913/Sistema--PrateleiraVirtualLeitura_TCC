import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import api from '../Services/SistemaPrateleira'

export default function CriarConta(){

    const API = new api();

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [nome,setNome] = useState('');
    const [nascimento,setNascimento] = useState();
    const [cpf,setCpf] = useState('');
    const [rg,setRg] = useState('');
    const [cartao,setCartao] = useState('');
    const [codigo,setCodigo] = useState();
    const [vencimento,setVencimento] = useState();
    const [telefone,setTelefone] = useState('');
    const [endereco,setEndereco] = useState('');
    
    const CriarConta = async() =>{
        try{
        const retorno = await API.CriarConta({
            InformacoesCliente:{
                nome:nome,
                nascimento:nascimento,
                cpf:cpf,
                rg:rg,
                cartaocredito:cartao,
                codigoseguranca:codigo,
                vencimentocartao:vencimento,
                endereco:endereco,
                telefone:telefone
            },
            conta:{
                email:email,
                senha:senha
            }
        });
        }
        catch(ex)
        {
            if(ex.response.data.motivo)
            toast.dark("😵 " + ex.response.data.motivo);
            else
            toast.error("😔 Tente Novamente");
        }

    }


    return(
        <body className="body">
            <div className="chefe">

                <div className="rodape">
                    <h3>Criar Conta: </h3>
                </div>

                <div className="monstro">
                    
                    
                        <div className="page">
                            <label>Novo Email:</label>
                            <input type="text" placeholder="Insira aqui o seu Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div> 

                        <div className="page">
                            <label>Nova Senha:</label>
                            <input type="text" placeholder="Insira aqui a sua Senha" onChange={(e) => setSenha(e.target.value)} />
                        </div> 

                        <div className="page">
                            <label>Nome:</label>
                            <input type="text" placeholder="Insira aqui o seu Nome" onChange={(e) => setNome(e.target.value)} />
                        </div> 

                        <div className="page">
                            <label>Data de Nascimento:</label>
                            <input type="date" placeholder="Insira aqui a sua data de nascimento" onChange={(e) => setNascimento(e.target.value)} ></input>
                        </div>

                        <div className="page">
                            <label>Cpf:</label>
                            <input type="text" placeholder="Insira aqui o seu Cpf" onChange={(e) => setCpf(e.target.value)} ></input>
                        </div>
                        
                        <div className="page">
                            <label>Rg:</label>
                            <input type="text" placeholder="Insira aqui o seu Rg" onChange={(e) => setRg(e.target.value)} ></input>
                        </div>
                        
                        <div className="page">
                            <label>Cartao de Crédito:</label>
                            <input type="text" placeholder="Insira aqui o numero do seu cartão de crédito" onChange={(e) => setCartao(e.target.value)} ></input>
                        </div>

                        <div className="page">
                            <label>Codigo de Segurança:</label>
                            <input type="int" placeholder="Insira aqui o codigo de seguranca do cartão" onChange={(e) => setCodigo(Number(e.target.value))} ></input>
                        </div>

                        <div className="page">
                            <label>Vencimento do cartão:</label>
                            <input type="date" placeholder="Insira aqui a data de vencimento do cartão" onChange={(e) => setVencimento(e.target.value)} ></input>
                        </div>

                        <div className="page">
                            <label>Telefone:</label>
                            <input type="text" placeholder="Insira aqui o numero de telefone" onChange={(e) => setTelefone(e.target.value)} ></input>
                        </div>

                        <div className="page">
                            <label>Endereço:</label>
                            <input type="text" placeholder="Insira aqui o seu endereço" onChange={(e) => setEndereco(e.target.value)} ></input>
                        </div>
                    
                </div>

                <div className="eventos">

                    <div className="termos">
                       Ao criar a conta você aceita os <Link to="/termosEcondicoes" >Termos e Condicões</Link>
                    </div>

                    <div className="acoes">
                        <a className="btn btn-primary evento1" href="/" >
                            voltar
                        </a>
                        <div className="btn btn-success evento2" onClick={CriarConta}>
                            Criar
                        </div>
                    </div>
                </div>
                
                <ToastContainer />
            </div>
        </body>
    )
}



