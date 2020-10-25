import React from 'react';
import './conlivfunc.css';

import {Link} from 'react-router-dom';
import { Search } from "react-bootstrap-icons";

function conlivfunc(){
    return(
        <div className="priconlivfunc">

            <div className="titulo">
                <h1>Consultar Livros</h1>
            </div>

            <div className="maingergerenfunc">
                <h4>Buscar Livros</h4>

                <Search size={16} style={{ cursor: "pointer"}} />
            
            </div>
  
            <div className="bvoltargerenfunc">
               <button variant="gray" size="lg" block>
                  Voltar
               </button>
            </div>

            <div className="table">
            <thead>
              <tr>

                <th>Nome do Livro</th>
                <th>Autor do Livro</th>
                <th>N° de Série</th>
                <th>Preço</th>
                <th>Ação</th>
                <th></th>

              </tr>

            </thead>
            
            </div>

        </div>
    )
}

export default conlivfunc;

