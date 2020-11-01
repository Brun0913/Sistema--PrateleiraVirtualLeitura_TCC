import React from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";

function menufuncionario(props){
    return(
        <div className="prifuncionario">
            <div className="mainfuncionario">

                <div className="titulofuncionario">
<<<<<<< HEAD
                    <h2>Olá seja bem-vindo</h2>
=======
                    <h1>Menu do Funcionário</h1>
>>>>>>> b04afbb6c826192a7379cf0ecdf24ee8d17f1ddf
                </div>

                <div id="container2menu">
                    <div id="sub-contenty1"></div>
                    <div id="sub-contenty2">
                        <div id="contenty2">
                            <div className="cadastrarlivro">
                                <a href="/inserirlivro" className="btn btn-light" id="sub-botao">Inserir Livro</a>
                            </div>
                            <div className="consultarlivro">
                                <a href="/conlivfunc" className="btn btn-light" id="sub-botao">Consultar Livros</a>
                            </div>
                            <div className="bvoltar">
                                <a href="/" className="btn btn-secondary" id="sub-botao">Sair</a>
                            </div>
                        </div>
                    </div>
                    <div id="sub-contenty3"></div>
                </div>
          </div>
          
            <div id="contenty3">
                    <h3>Direitos do site Reservados @CopyRight</h3>
            </div>
      </div>
    )
}

export default menufuncionario;
