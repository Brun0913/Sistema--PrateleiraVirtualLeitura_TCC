import React from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";

function menufuncionario(props){
    return(
        <div className="prifuncionario">
            <div className="mainfuncionario">
                <h1>Book Mananger</h1>

                <div className="titulofuncionario">
                    <h1>Menu do Funcionário</h1>
                </div>

                <div className="cadastrarlivro">
                     <Link className="btn btn-primary" to="/inserirlivro">
                       Cadastrar Livro
                     </Link> 
                </div>

                <div className="consultarlivro">
                      <Link to="/conlivfunc" className="btn btn-primary">Consultar Livro</Link>
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

export default menufuncionario;
