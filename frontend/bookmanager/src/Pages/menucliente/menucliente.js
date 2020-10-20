import React, { useState } from "react";
import './menucliente.css';

import {Link} from 'react-router-dom';
import { Button, variant } from 'react-bootstrap';
import perfilimage from './perfil-de-usuario.png'
import iconelivro from './images.png'
import 'bootstrap/dist/css/bootstrap.min.css'


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
                <img src={perfilimage }/>
               </div>      
          </div>
          
          <div className="historico">
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
          </div>

      </div>
    </div>     
    )
}

export default menucliente;