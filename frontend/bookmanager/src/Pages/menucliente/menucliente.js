import React from "react";
import './menucliente.css';
import {Link} from 'react-router-dom';

import perfilimage from './perfil-de-usuario.png'
import iconelivro from './images.png'


function menucliente(){
    return(
    <div className="primaria">
      <div className="main">
        
          <div className="titulo">
              <h1>Menu do Cliente</h1>
          </div>

          <div className="perfil">
                <Link>Meu perfil</Link>
               <div className="imageper"> 
                <img src={perfilimage}/>
               </div>      
          </div>
          
          <div className="historico">
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
          </div>

      </div>
    </div>     
    )
}

export default menucliente;