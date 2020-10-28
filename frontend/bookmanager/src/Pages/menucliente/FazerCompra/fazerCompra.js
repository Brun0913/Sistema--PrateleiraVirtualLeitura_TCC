import React from "react";
import './fazerCompra.css'


import { Search } from "react-bootstrap-icons";

function fazerCompras(){
    return(
        <div className="fist">

            <div className="titulo">
                <h1>Gerenciamento de Funcionário</h1>
            </div>

            <div className="procura">
               <h4>Buscar </h4>
               
               <Search size={16} style={{ cursor: "pointer" }} />

            </div>

            <div className="voltar">
            
               <button variant="gray" size="lg" block>
                  <a href='/menucliente'> Voltar </a>
               </button>
            </div>

          <div className="tabelinha">
            <thead>
              <tr>

                <th>Nome do Livro</th>
                <th>Autor</th>
                <th>Nº de Série</th>
                <th>Preço</th>
                <th> <a href='/Compra'> Ação </a></th>
                <th></th>

              </tr>

            </thead>
            
          </div>
        </div>

    )
}

export default fazerCompras;