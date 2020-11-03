import React from'react';
import './finalizar.css';
import {Link} from 'react-router-dom';

import codigo from'./codigo.png'



function FinalizarCompra(){
    return(
        <div className='nome'>

             <div className="titulofinalizar">
                <div className='drag'>
                    <h1>Parabéns!Compra concluída!</h1>
                </div>
             </div>  

                <div className='jg'>
                    <h3>Você deseja baixar o livro ?</h3>
                </div>

                <div className='codigo'>
                <img src={codigo}/>
                </div>

            <div className='escolha'>
                
                <div className="sim">
                    <button variant="gray" size="lg" block>
                        <h4>Sim</h4>  
                    </button>
                </div>
                
                <div className="não">
                    <button variant="gray" size="lg" block>
                        <h4>Não</h4>
                    </button>
                </div>
            </div>

                <div className="voltar">
                    <button variant="gray" size="lg" block>
                        <a href='/menucliente'> Voltar </a>
                    </button>
                </div>
        </div>

        

    )
}


export default FinalizarCompra;