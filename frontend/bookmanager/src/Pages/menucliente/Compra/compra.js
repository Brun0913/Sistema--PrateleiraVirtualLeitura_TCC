import React from 'react';
import'./compra.css';
import {Link} from 'react-router-dom';
import img from './livro-um.png'

import API from '../../Services/FuncoesCliente'

function compra(props){
    console.log(props.location.state);
    console.log(props.location.state.id);

    const api = new API();
    const idlivro = props.location.state.id;
    const idcliente = props.location.state.id;

    const fazercompra = async()=>{
        const x = await api.FazerCompra(idlivro,idcliente);
        return x;
    }

    return(
        <body id="corpotelacompra">
            <div id="mae">
                <div name="titulolivro" id="titulocompralivro">
                    <h2>{props.location.state.livro}</h2>
                </div>
                <div name="containerimglivro" id="containerimglivro">
                    <div name="imagem" id="imagemcapalivro">
                        <img className="capadolivrocompra"></img>
                    </div>
                    <div name="informacoescruciais" id="informacoesrelevante">
                        <div name="preco" id="valorlivrocompra">
                            <h5>Valor Do Livro:</h5>
                            <div>
                                {props.location.state.preco}
                            </div>
                        </div>
                        <div name="acaocompra" id="acaodecompra">
                            <a className="btn btn-primary" href="/finalizar">Comprar</a>
                        </div>
                        <div name="sinopse" id="sinopsegrande">
                            <p>
                                {props.location.state.sinopse}
                            </p>
                        </div>
                    </div>
                </div>
                <div name="caracteristicas" id="caracteristicasimportantes">
                    <h2 id="minititulo">Caracteristicas:</h2>
                </div>
                <div name="informacoes" id="informacoesessenciais">
                    <div name="informacoesparte1" id="infocontainer1">
                        <div name="numeropaginas" id="espaconasinformacoes">
                            <h5>Numero de Paginas: </h5>
                            <div>
                                {props.location.state.paginas}
                            </div>
                        </div>
                        <div name="autor" id="espaconasinformacoes">
                            <h5>Nome do Autor: </h5>
                            <div>
                                {props.location.state.autor}
                            </div>
                        </div>
                        <div name="editora" id="espaconasinformacoes">
                            <h5>Editora: </h5>
                            <div>                          
                                {props.location.state.editora}
                            </div>
                        </div>
                        <div name="publicacaolivro" id="espaconasinformacoes">
                            <h5>Data de Publicação:</h5>
                            <div>{props.location.state.publicacao}</div>
                        </div>
                    </div>
                    <div name="informacoesparte2" id="infocontainer2">
                        <div name="numeroserie" id="espaconasinformacoes">
                            <h5>Numero de Serie:</h5>
                            <div>{props.location.state.serie}</div>
                        </div>
                        <div name="genero" id="espaconasinformacoes">
                            <h5>Genero: </h5>
                            <div>{props.location.state.genero}</div>
                        </div>
                        <div name="acaovoltar" id="espaconasinformacoes">
                            <Link to={{
                                pathname:"/menucliente",
                                state:props.location.state
                            }} className="btn btn-secondary">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}


export default compra;