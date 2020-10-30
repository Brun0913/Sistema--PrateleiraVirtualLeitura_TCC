import React from "react";
import './menucliente.css';
import {Link} from 'react-router-dom';

import perfilimage from './perfil-de-usuario.png'


function menucliente(props){
    return(
    <div className="primaria">
      <div className="main">
        
          <div className="titulo">
              <h1>Menu do Cliente</h1>
              {props.location.state.email}
          </div>

          <div className="perfil">
                <Link to='/Perfil' >Meu perfil</Link>
               <div className="imageper"> 
                <img src={perfilimage}/>
               </div>      
          </div>
          
          
          <div className="historico">
            <button variant="gray" size="lg" block>
              <a href="/HistCompras">Histórico de Compras</a>
            </button>
          </div>

          <div className="fazercompra">
            <button variant="gray" size="lg" block>
             <a href="/fazerCompra"> Fazer uma Compra </a>
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