import React, { useRef } from'react';
import './HistCompras.css';
import { Search } from "react-bootstrap-icons";
import LoadingBar from 'react-top-loading-bar'
import {Link} from 'react-router-dom';


function HistoricoCompras(){

    const LoadingBar = useRef(null);
    

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
                <div className='tabela'>
                
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th><h3>Nome do Livro</h3></th>
                                <th><h3>Autor do Livro</h3></th>
                                <th><h3>Nº de Série</h3></th>
                                <th><h3>Preço</h3></th>
                                <th><h3>Data da Compra</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h3>Harry Potter</h3></td>
                                <td><h3>J.K. Rowling</h3></td>
                                <td><h3>274949892</h3></td>
                                <td><h3>R$46,90</h3></td>
                                <td><h3>25/09/2020</h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
  
        </div>
    

    )
}

export default HistoricoCompras;
