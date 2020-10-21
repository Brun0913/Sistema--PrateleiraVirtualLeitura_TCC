<<<<<<< HEAD
import React from "react";
import './menugerente.css';

import { Link } from "react-router-dom";
=======
import React, { useState } from "react";
import './menugerente.css';

import { Link } from "react-router-dom";
import { Button, variant } from 'react-bootstrap';
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe

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
<<<<<<< HEAD
                     <button variant="gray" size="lg" block>
                       Adicionar Funcionário
                     </button>   
=======
                     <Button variant="gray" size="lg" block>
                       Adicionar Funcionário
                     </Button>   
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
                    </Link>
                </div>

                <div className="gerenfuncionario">
                    <Link to="">
<<<<<<< HEAD
                     <button variant="gray" size="lg" block>
                       Gerenciamento de Funcionário
                     </button>  
=======
                     <Button variant="gray" size="lg" block>
                       Gerenciamento de Funcionário
                     </Button>  
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
                    </Link>
                </div>

                <div className="gerenfinancas">
                    <Link to="">
<<<<<<< HEAD
                     <button variant="gray" size="lg" block>
                       Gerenciamento de Finanças
                     </button>  
=======
                     <Button variant="gray" size="lg" block>
                       Gerenciamento de Finanças
                     </Button>  
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
                    </Link>
                </div>

                <div className="bvoltar">
<<<<<<< HEAD
                    <Link to="/">
                     <button variant="gray" size="lg" block>
                       Voltar
                     </button>  
=======
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Voltar
                     </Button>  
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default menugerente;