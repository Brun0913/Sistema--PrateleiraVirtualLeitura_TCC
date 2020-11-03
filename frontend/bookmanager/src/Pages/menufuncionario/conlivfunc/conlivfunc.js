import React, { useRef, useEffect } from 'react';

import {useState} from 'react'
import './conlivfunc.css';
import {Link} from 'react-router-dom';
import { Search } from "react-bootstrap-icons";
import LoadingBar from 'react-top-loading-bar'

import api from '../../Services/FuncoesFuncionario'

export default function ConsultarLivroFunc(){
    
    const loadingBar = useRef(null);
    const funcoes = new api();
    const [livros,setLivros] = useState([]);

    const Buscarlivros = async () =>{
        loadingBar.current.continuousStart();
        const x = await funcoes.ConsultarLivros();
        setLivros([...x]);
        loadingBar.current.complete();
    }
    useEffect(() => {
        Buscarlivros();
      }, []);

    return(
        <body className="corpo">
            <LoadingBar
            color='red'
            height={5}
            ref={loadingBar}
            />

            <div className="corpotabela">
                <div id="tituloconsultarlivro">
                    <h2 id="subtituloconsultarlivro">Consultar Livros</h2>
                    <div>
                        <Search size={26} style={{ cursor: "pointer" }} onClick={Buscarlivros}/>
                    </div>
                </div>

                <div className="compactador">
                    <div id="filtrostb">
                        <div className="selecao">
                            <label>Genero: </label>
                            <select>
                                <option>Misterio</option>
                                <option>Terror</option>
                                <option>Aventura</option>
                                <option>Comedia</option>
                                <option>Acao</option>
                                <option>Fabula</option>
                            </select>
                        </div>
                        <div className="selecao">
                            <label>Ano Publicação: </label>
                            <select>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                            </select></div>
                        <div>
                        <div className="selecao">
                            <label>Letra Inicial Livro: </label>
                                <select>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                    <option>F</option>
                                </select>
                            </div>
                        </div>
                        <div className="voltartelaconsult">
                            <a href="/menufuncionario" className="btn btn-secondary">Voltar Ao Menu</a>
                        </div>
                    </div>
                    <div id="controladormodelotb">
                        <div id="modelotabela">
                            <div className="table">
                                <thead className="orange">
                                    <tr>
                                        <th>Nome Do Livro</th>
                                        <th>Autor</th>
                                        <th>Genero</th>
                                        <th>Data de Publicação</th>
                                        <th>Preco</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="black">
                                    {livros.map(e =>(
                                        <tr id="branco">
                                            <td>{e.livro}</td>
                                            <td>{e.autor}</td>
                                            <td>{e.genero}</td>
                                            <td>{e.publicacao}</td>
                                            <td>{e.preco}</td>
                                            <td>
                                            <Link to={{
                                                pathname:"/alterlivfunc",
                                                state:e
                                            }}>
                                                Alterar
                                            </Link>
                                            </td>
                                            <td>
                                            <Link to={{
                                                pathname:"/excluirlivro",
                                                state:e
                                            }}>
                                                Excluir
                                            </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ultimo">
                    <h3 className="preto">Altere ou Exclua livros por aqui</h3>
                </div>
            </div>

        </body>
    );
}

