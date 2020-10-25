import React from 'react';
import './gergerenfunc.css';

import {Link} from 'react-router-dom';
import { Search } from "react-bootstrap-icons";



function gergerenfunc(){
    return(
        <div className="prigerenfunc">

            <div className="titulo">
                <h1>Gerenciamento de Funcionário</h1>
            </div>

            <div className="maingergerenfunc">
               <h4>Buscar </h4>
               
               <Search size={16} style={{ cursor: "pointer" }} />

            </div>

            <div className="bvoltargerenfunc">
               <button variant="gray" size="lg" block>
                  Voltar
               </button>
            </div>

          <div className="table">
            <thead>
              <tr>

                <th>Nome</th>
                <th>N° de Carteira de trabalho</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Ação</th>
                <th></th>

              </tr>

            </thead>
            
          </div>
        </div>

    )
}

export default gergerenfunc;