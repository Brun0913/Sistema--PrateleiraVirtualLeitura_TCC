import React from'react';
import './HistCompras.css';

import {Link} from 'react-router-dom';

function HistoricoCompras(){
    return(

        <div className='Gaia'>

            <div className='Zeus'> 

                <div className='Titulo'>
                    <h1>Histórico de Compras</h1>
                </div>

                <div className="voltar">    
                    <Link to="/menucliente">
                        <button variant="gray" size="lg" block>
                            Voltar
                        </button>
                    </Link>
                </div>

            </div>

            <div className='tabela'>
            <thead>
                <tr>
                    <th><h3>Nome do Livro</h3></th>
                    
                    <th><h3>Autor do Livro</h3></th>
                    
                    <th><h3>Nº de Série</h3></th>

                    <th><h3>Preço</h3></th>

                    <th><h3>Data da Compra</h3></th>

                </tr>
            </thead>
            </div>
  
        </div>
    

    )
}

export default HistoricoCompras;
