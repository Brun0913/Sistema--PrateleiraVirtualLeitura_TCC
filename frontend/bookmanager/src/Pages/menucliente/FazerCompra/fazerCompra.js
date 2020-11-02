import React, { useEffect, useRef, useState } from "react";
import './fazerCompra.css'

import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import api from '../../Services/FuncoesCliente';

function FazerCompras(){

  const funcoes = new api();
  const[lista,setLista] = useState([]);

  const consultarlivros = async() =>{
    const x = await funcoes.ConsultarLivro();
    return x;
}

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

                          {lista.map(e =>(
                            <tr key={e.id}>
                              <td>{e.livro}</td>
                              <td>{e.autor}</td>
                              <td>{e.serie}</td>
                              <td>{e.preco}</td>
                            </tr>

                          ))}

                      </tbody>                     
                  </table>
                </div>

              </div>
          </div>
        </body>
    )
}

export default FazerCompras;