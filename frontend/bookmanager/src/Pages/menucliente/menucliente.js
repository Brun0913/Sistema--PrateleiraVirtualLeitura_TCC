import React, { useEffect, useState } from "react";
import './menucliente.css';
import {Link} from 'react-router-dom';

import perfilimage from './perfil-de-usuario.png'


<<<<<<< HEAD
function MenuCliente(props){
    
      return(
    
      <body id="body">
        <div id="main">
=======
function menucliente(props){
    return(
    <div className="primaria">
      <div className="main">
        
          <div className="titulo">
              <h1>Menu do Cliente</h1>
          </div>
>>>>>>> b04afbb6c826192a7379cf0ecdf24ee8d17f1ddf

          <div id="titulo">
              <h2 id="color">Menu Cliente:</h2>
          </div>
          
          <div id="container">
            <div id="subcontainer1"></div>
            <div id="subcontainer2">
              
              <div id="acoes">
                <div>
                  <a href="" className="btn btn-light" id="acao">Fazer Compra</a>
                </div>
                <div>
                  <a href="" className="btn btn-light" id="acao">Consultar Livros</a>
                </div>
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
      </body>
    )
}

<<<<<<< HEAD
export default MenuCliente;
=======
export default menucliente;
>>>>>>> b04afbb6c826192a7379cf0ecdf24ee8d17f1ddf
