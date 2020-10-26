import React from"react";
import './gerenfinancas.css';

import { Link } from "react-router-dom";

function GerenciarFinancas(){
    return(
        <div className="financas">
            
            <div className="gerenciamento">
                <h1> Gerenciamento de Finanças </h1>
            </div>

            <div className="Lucro">
               <h3> lucro do mês </h3>
            </div>

            <div className="qtdLivros">
               <h3> Quantidade de livros vendidos mês </h3>
            </div>

            <div className="Nmfuncionarios">
                <h3> Número de funcionários ativos </h3>
            </div>

            <div className="bvoltar">
                <Link to="/menugerente">
                    <button variant="gray" size="lg" block>
                        Voltar
                    </button> 
                </Link>
            </div>

        </div>
    )
}

export default GerenciarFinancas;