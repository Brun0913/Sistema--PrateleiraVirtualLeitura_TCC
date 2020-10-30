import React from "react";
import './menugerente.css';

import { Link } from "react-router-dom";

function menugerente(props){
    return(
      <div className="prigerente">
          <div className="maingerente">
                <h1>Olá seja bem-vindo gerente</h1>

                <div className="titulogerente">
                    <h1>Menu Gerente</h1>
                </div>

                <div className="addfuncionario">
                     <a href="/gercadfunc" variant="gray" size="lg" block>
                       Adicionar Funcionário
                     </a> 
                </div>

                <div className="gerenfuncionario">
                     <a href="/gergerenfunc" variant="gray" size="lg" block>
                       Gerenciamento de Funcionário
                     </a>
                </div>

                <div className="gerenfinancas">
                     <a href="gerenciarfinancas">Gerenciamento de finanças</a>
                </div>

                <div className="bvoltar">
                    <Link to="/">
                        Voltar
                    </Link>
                </div>

          </div>

    </div>
    )
}

export default menugerente;
