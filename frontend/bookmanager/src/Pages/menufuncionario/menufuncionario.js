<<<<<<< HEAD
import React from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";
=======
import React, { useState } from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe

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
<<<<<<< HEAD
                     <button variant="gray" size="lg" block>
                       Cadastrar Livro
                     </button>  
=======
                     <Button variant="gray" size="lg" block>
                       Cadastrar Livro
                     </Button>  
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
                    </Link>
                </div>

                <div className="consultarlivro">
                    <Link to="">
<<<<<<< HEAD
                     <button variant="gray" size="lg" block>
                       Consultar Livro
                     </button>  
=======
                     <Button variant="gray" size="lg" block>
                       Consultar Livro
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

export default menufuncionario;