import React from "react"
import '../CriarConta/App.css'

export default function CriarConta(){

    return(
        <div className="chefe">

            <div className="rodape">
                <h3 className="titulo">Criar Conta: </h3>
            </div>

            <div className="monstro">
                
                <div className="container1">
                
                    <div className="page">
                        <label>Novo Email:</label>
                    </div> 

                    <div className="page">
                        <label>Nova Senha:</label>
                    </div> 

                    <div className="separador">
                        <label>Nome:</label>
                    </div> 

                    <div className="page">
                        <label>Data de Nascimento:</label>
                    </div>

                    <div className="page">
                        <label>Cpf:</label>
                    </div>
                    
                    <div className="page">
                        <label>Rg:</label>
                    </div>
                    
                    <div className="page">
                        <label>Cartao de Crédito:</label>
                    </div>

                    <div className="page">
                        <label>Codigo de Segurança:</label>
                    </div>

                    <div className="page">
                        <label>Vencimento do cartão:</label>
                    </div>

                    <div className="page">
                        <label>Telefone:</label>
                    </div>

                    <div className="page">
                        <label>Endereço:</label>
                    </div>
                </div>

                <div className="container2">
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o seu Email" />
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui a sua Senha" />
                    </div>

                    <div className="separador2">
                        <input type="text" placeholder="Insira aqui o seu Nome" />
                    </div>
                    
                    <div className="page2">
                        <input type="date" placeholder="Insira aqui a sua data de nascimento"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o seu Cpf"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o seu Rg"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o numero do seu cartão de crédito"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="int" placeholder="Insira aqui o codigo de seguranca do cartão"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="date" placeholder="Insira aqui a data de vencimento do cartão"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o numero de telefone"></input>
                    </div>
                    
                    <div className="page2">
                        <input type="text" placeholder="Insira aqui o seu endereço"></input>
                    </div>
                </div>
            </div>

            <div className="eventos">

                <div className="termos">
                    <input type="checkbox" className="maldito"></input>
                    Eu aceito os Termos e Condicões
                </div>

                <div className="acoes">
                    <div className="btn btn-primary evento1">
                        voltar
                    </div>
                    <div className="btn btn-success evento2">
                        Criar
                    </div>
                </div>
             </div>
        </div>
    )
}