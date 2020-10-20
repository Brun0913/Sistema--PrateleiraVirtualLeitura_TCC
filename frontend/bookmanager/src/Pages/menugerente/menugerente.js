import React, { useState } from "react";
import './menugerente.css';

import { Link } from "react-router-dom";
import { Button, variant } from 'react-bootstrap';

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
                     <Button variant="gray" size="lg" block>
                       Adicionar Funcionário
                     </Button>   
                    </Link>
                </div>

                <div className="gerenfuncionario">
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Gerenciamento de Funcionário
                     </Button>  
                    </Link>
                </div>

                <div className="gerenfinancas">
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Gerenciamento de Finanças
                     </Button>  
                    </Link>
                </div>

                <div className="bvoltar">
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Voltar
                     </Button>  
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default menugerente;