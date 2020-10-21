<<<<<<< HEAD
import React from "react";
import './menucliente.css';

import {Link} from 'react-router-dom';
import perfilimage from './perfil-de-usuario.png'
=======
import React, { useState } from "react";
import './menucliente.css';

import {Link} from 'react-router-dom';
import { Button, variant } from 'react-bootstrap';
import perfilimage from './perfil-de-usuario.png'
import iconelivro from './images.png'
import 'bootstrap/dist/css/bootstrap.min.css'

>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe

function menucliente(){
    return(
    <div className="primaria">
      <div className="main">
        
          <div className="titulo">
              <h1>Menu do Cliente</h1>
          </div>

          <div className="perfil">
                <Link to="">Meu perfil</Link>
               <div className="imageper"> 
<<<<<<< HEAD
                <img src={perfilimage}/>
=======
                <img src={perfilimage }/>
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
               </div>      
          </div>
          
          <div className="historico">
<<<<<<< HEAD
            <button variant="gray" size="lg" block>
              Histórico de Compras
            </button>
          </div>

          <div className="fazercompra">
            <button variant="gray" size="lg" block>
             Fazer uma Compra
            </button>
          </div>

          <div className="voltar">
            <Link to="/">
              <button variant="gray" size="lg" block>
                Voltar
              </button>
            </Link>
=======
            <Button variant="gray" size="lg" block>
              Histórico de Compras
            </Button>
          </div>

          <div className="fazercompra">
            <Button variant="gray" size="lg" block>
             Fazer uma Compra
            </Button>
          </div>

          <div className="voltar">
            <Button variant="gray" size="lg" block>
              Voltar
            </Button>
>>>>>>> 575443500523e0041d4c2ffd3211234dd30eccbe
          </div>

      </div>
    </div>     
    )
}

export default menucliente;