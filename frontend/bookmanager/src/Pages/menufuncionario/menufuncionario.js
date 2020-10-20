import React, { useState } from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function menufuncionario(){
    return(
        <div className="prifuncionario">
            <div className="mainfuncionario">
                <h1>Book Mananger</h1>

                <div className="titulofuncionario">
                    <h1>Menu do Funcionário</h1>
                </div>

                <div className="cadastrarlivro">
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Cadastrar Livro
                     </Button>  
                    </Link>
                </div>

                <div className="consultarlivro">
                    <Link to="">
                     <Button variant="gray" size="lg" block>
                       Consultar Livro
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

export default menufuncionario;