import React from'react';
import './finalizar.css';
import {Link} from 'react-router-dom';

import codigo from'./codigo.png'



function FinalizarCompra(props){
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
                    <button variant="gray" size="lg" block className="btn btn-danger">
                        <h4>Sim</h4>  
                    </button>
                </div>
                
                <div className="não">
                    <Link to={{
                        pathname:"/menucliente",
                        state:props.location.state
                    }} className="btn btn-dark">
                        Não
                    </Link>
                </div>
            </div>

                <div className="voltar">
                    <button variant="gray" size="lg" block>
                        <Link to={{
                            pathname:"/menucliente",
                            state:props.location.state
                        }}> Voltar </Link>
                    </button>
                </div>
        </div>

        

    )
}


export default FinalizarCompra;