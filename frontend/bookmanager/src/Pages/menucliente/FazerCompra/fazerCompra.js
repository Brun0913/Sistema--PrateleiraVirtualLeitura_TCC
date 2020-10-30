import React from "react";
import './fazerCompra.css'

import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function fazerCompras(){
    return(
        <body>
          <div className="first">
              <div className="subcontainer">
                <div id="titulo">
                    <h1>Livros Disponiveis:</h1>
                </div>

                <a id="botao" className="btn btn-secondary" href="/menucliente">
                  Voltar
                </a>
              </div>
              <div className="subcontainer2">
                <Search size={26} style={{ cursor: "pointer" }} id="acao"/>
                
                <div id="posicaotabela">
                  <table className="table" id="tabela">
                      <thead id="colunas">
                        <tr>
                          <th>Nome do Livro</th>  
                          <th>Autor do Livro</th>  
                          <th>N° de Série</th>  
                          <th>Data Publicacao</th>  
                          <th>preco</th>
                          <th></th>  
                        </tr>  
                      </thead> 
                      <tbody id="registros">
                        <tr id="cor">
                          <td>Harry Potter</td>  
                          <td>J.K</td>  
                          <td>ADH23098FV</td>  
                          <td>20-09-2012</td>  
                          <td>149.90</td>  
                          <td>
                            <Link to={{
                              pathname:"/Compra",
                              state:"Harry Potter"
                            }}>Comprar</Link> 
                          </td> 
                        </tr>  
                      </tbody>                     
                  </table>
                </div>

              </div>
          </div>
        </body>
    )
}

export default fazerCompras;