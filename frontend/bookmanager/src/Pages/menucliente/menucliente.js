import React, { useEffect, useState } from "react";
import './menucliente.css';
import {Link} from 'react-router-dom';

import perfilimage from './perfil-de-usuario.png'

function MenuCliente(props){
    return(
    <div className="primaria">
      <div className="main">
        
          <div className="titulo">
              <h1>Menu do Cliente</h1>
          </div>

          <div id="titulo">
              <h2 id="color">Menu Cliente:</h2>
          </div>
          
          <div id="container">
            <div id="subcontainer1"></div>
            <div id="subcontainer2">
              
              <div id="acoes">

              <Link to='/FazerCompra'>
                <div>
                  <a href="" className="btn btn-light" id="acao">Fazer Compra</a>
                </div>
              </Link> 

              <Link to='/HistCompras'> 
                <div>
                  <a href="" className="btn btn-light" id="acao">Histórico de Compra</a>
                </div>
              </Link>

                <div>
                <a href="/" className="btn btn-secondary" id="acao">Sair</a>
                </div>
              </div>

            </div>
            <div id="subcontainer3">
              <h4 id="titulo2">Perfil:</h4>
              <a href="/perfil" className="campoimg">
                <img src={perfilimage} id="img"></img>
              </a>
            </div>
          </div>
          <div id="rodape">
            <h3 id="color">Direitos do site reservados</h3>
          </div>
        </div>
      </div>
    )
}

export default MenuCliente;


