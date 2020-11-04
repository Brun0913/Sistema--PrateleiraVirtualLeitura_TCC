import React, { useEffect, useRef, useState } from "react";
import './fazerCompra.css'

import { Search } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

import api from '../../Services/FuncoesCliente';

function FazerCompras(props){

  const id = props.location.state.id;

  const loadingBar = useRef(null);
  const funcoes = new api();
  const[lista,setLista] = useState([]);
  const history = useHistory();

  const consultarlivros = async() =>{
    loadingBar.current.continuousStart(); 
    const x = await funcoes.ConsultarLivro();
    setLista([...x]);
    loadingBar.current.complete();
  }
  useEffect(() => {
    consultarlivros();
  }, []);
  

    return(
        <body>
          <LoadingBar
            height={4}
            color='#f11946'
            ref={loadingBar}
            />
          <div className="first">
              <div className="subcontainer">
                <div id="compradelivros">
                    <h1>Livros Disponiveis:</h1>
                </div>

                <Link id="botao" className="btn btn-secondary" to={{
                  pathname:"/menucliente",
                  state:props.location.state
                }}>
                  Voltar
                </Link>
              </div>
              <div className="subcontainer2">
                
                <div id="posicaotabela">
                  <table className="table" id="tabela">
                      <thead id="colunas">
                        <tr>
                          <th>Nome do Livro</th>  
                          <th>Autor do Livro</th>  
                          <th>N° de Série</th>  
                          <th>Data Publicão</th>  
                          <th>Preço</th>
                          <th></th>  
                        </tr>  
                      </thead> 
                      <tbody id="registros">

                          {lista.map(e =>(
                            <tr id="cor" key={e.id}>
                              <td>{e.livro}</td>
                              <td>{e.autor}</td>
                              <td>{e.serie}</td>
                              <td>{new Date(e.publicacao).toLocaleDateString()}</td>
                              <td>{e.preco}</td>
                              <td>
                                <Link to={{
                                  pathname:"/Compra",
                                  state:props.location.state,
                                  state:e
                                }}>
                                  Comprar
                                </Link>
                              </td>
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