import React from "react";
import './menugerente.css';

import { Link } from "react-router-dom";

function menugerente(){
    return(
        <div className="prigerente">
            <div className="maingerente">
                <h1>Olá seja bem-vindo gerente</h1>

                <div className="titulogerente">
                    <h1>Menu Gerente</h1>
                </div>

                <div className="addfuncionario">
                    <Link to="">
                     <button variant="gray" size="lg" block>
                       Adicionar Funcionário
                     </button>   
                    </Link>
                </div>

                <div className="gerenfuncionario">
                    <Link to="">
                     <button variant="gray" size="lg" block>
                       Gerenciamento de Funcionário
                     </button>  
                    </Link>
                </div>

                <div className="gerenfinancas">
                    <Link to="">
                     <button variant="gray" size="lg" block>
                       Gerenciamento de Finanças
                     </button>  
                    </Link>
                </div>

                <div className="bvoltar">
                    <Link to="/">
                     <button variant="gray" size="lg" block>
                       Voltar
                     </button>  
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default menugerente;