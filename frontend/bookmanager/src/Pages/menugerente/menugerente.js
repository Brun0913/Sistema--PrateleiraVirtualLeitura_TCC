import React from "react";
import './menugerente.css';

import { Link } from "react-router-dom";

<<<<<<< HEAD
function MenuGerente(props){
=======
function menugerente(props){
    return(
      <div className="prigerente">
          <div className="maingerente">
                <h1>Olá seja bem-vindo gerente</h1>

                <div className="titulogerente">
                    <h1>Menu Gerente</h1>
                </div>
>>>>>>> b04afbb6c826192a7379cf0ecdf24ee8d17f1ddf

    return(
      <body>
        <div className="prigerente">

          <div className="maingerente">
            <div id="secgerente">
                <h1>Olá seja bem-vindo</h1>
            </div>
          </div>
              
              <div id="grandecontainer">
                <div id="container1"></div>

                <div id="container2">
                  <div id="sub-container2">
                    <div id="gerenciarfinancas">
                      <a href="/gerenciarfinancas" className="btn btn-light" id="sub-botao">Gerenciar Finanças</a>
                    </div>
                    <div id="cadastrarfuncionario">
                      <a href="/gercadfunc" className="btn btn-light" id="sub-botao">Cadastrar Funcionario</a>
                    </div>
                    <div id="gerenciarfuncionarios">
                      <a href="/gergerenfunc" className="btn btn-light" id="sub-botao">Lista de Funcionario</a>
                    </div>
                    <div id="voltar">
                      <a href="/" className="btn btn-secondary" id="sub-botao">Sair</a>
                    </div>
                  </div>
                </div>

                <div id="container3"></div>
              </div>
          <div id="thirdgerente">
            <h2>Direitos do site reservados @Copyright</h2>
          </div>
        </div>
      </body>
    )
}

<<<<<<< HEAD
export default MenuGerente;
=======
export default menugerente;
>>>>>>> b04afbb6c826192a7379cf0ecdf24ee8d17f1ddf
