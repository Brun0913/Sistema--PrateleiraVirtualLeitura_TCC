import React from 'react';
import './gergerenfunc.css';

import { Search } from "react-bootstrap-icons";
import {Link} from 'react-router-dom';

function gergerenfunc(){
    return(
        <div className="prigerenfunc">

            <div className="titulo">
                <h1 id="titulogergeren">Gerenciamento de Funcionário</h1>
            </div>

            <div className="maingergerenfunc">
              <div className="divagergeren">
               <h4>Buscar </h4>
               
               <Search size={16} style={{ cursor: "pointer" }} />
               
            <div className="bvoltargerenfunc">
              <Link to='/menugerente'>
               <button id="buttonger" variant="gray" size="lg" block>
                  Voltar
               </button>
              </Link> 
            </div>
           </div> 
           </div>

        <div className="controladordetable2">
          <div id="tableger" className="table">
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

        </div>

    )
}

export default gergerenfunc;