import React from "react";
import './menufuncionario.css';

import { Link } from "react-router-dom";

function menufuncionario(){
    return(
        <div className="prifuncionario">
            <div className="mainfuncionario">
                <h1>Book Mananger</h1>

                <div className="titulofuncionario">
                    <h1>Menu do Funcionário</h1>
                </div>

                <div className="cadastrarlivro">
                     <button variant="gray" size="lg" block>
                       Cadastrar Livro
                     </button> 
                </div>

                <div className="consultarlivro">
                  <Link to="/conlivfunc">
                     <button variant="gray" size="lg" block>
                       Consultar Livro
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

export default menufuncionario;