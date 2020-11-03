import React, {useState} from'react';
import './HistCompras.css';

import {Link} from "react-router-dom"
import API from '../../Services/FuncoesCliente'

export default function HistoricoCompras(props){

    const api = new API();
    const [lista,setList] = useState([]);

    const buscarhistorico = async() =>{
        const x = await api.HistoricoCompras(props.location.state.id);
        setList(x);
    }
 
    return(

        <div className='Gaia'>

                <div className='Titulo'>
                    <h1 id="titulohist">Histórico de Compras</h1>
                </div>
                <div className="zeus">
                    <div id="blocodecomandos">
                        <div className="btn btn-primary minibloco" onClick={buscarhistorico}>Buscar Novamente</div>
                        <Link to={{
                            pathname:"/menucliente",
                            state:props.location.state
                        }} className="btn btn-secondary minibloco">Voltar</Link>
                    </div>
                    
                    <div className="controlladordetable">
                        <div className="table">
                            <thead id="colunas">
                                <tr>
                                    <th>Nome do Livro</th>
                                    <th>Autor do Livro</th>
                                    <th>Genero</th>
                                    <th>Data de Compra</th>
                                    <th>Preco Livro</th>
                                </tr>
                            </thead>
                            <tbody id="registros">
                            {lista.map(e => (
                                <tr key={e.id} id="cor">
                                    <td>{e.livro}</td>
                                    <td>{e.autor}</td>
                                    <td>{e.serie}</td>
                                    <td>{e.preco}</td>
                                    <td>{e.datacompra}</td>
                                </tr>
                            ))}
                            </tbody>
                        </div>
                    </div>
                </div>

        </div>
    

    )
}


