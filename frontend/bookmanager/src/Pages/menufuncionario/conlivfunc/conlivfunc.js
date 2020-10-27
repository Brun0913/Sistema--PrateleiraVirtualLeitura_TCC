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
            <div className="titulo">
                <h1>Consultar Livros</h1>
            </div>

            <div className="maingergerenfunc">
                <h4>Buscar Livros </h4>

                <Search size={26} style={{ cursor: "pointer"}} onClick={Buscarlivros} />
            
            </div>
  
            <div className="bvoltargerenfunc">
               <Link to="menufuncionario" className="btn btn-primary">
                Voltar
               </Link>
            </div>

            <div className="table">
            <thead>
              <tr>

                <th>Nome do Livro</th>
                <th>Autor do Livro</th>
                <th>Genero</th>
                <th>Preço</th>
                <th>Ação</th>
                <th></th>

              </tr>

            </thead>
            <tbody>

                {livros.map(e =>(
                    <tr key={e.id}>
                        <td>{e.livro}</td>
                        <td>{e.autor}</td>
                        <td>{e.genero}</td>
                        <td>{e.preco}</td>
                        <td>
                            <Link to={{
                                pathname:"/excluirlivro",
                                state:e
                            }}>
                                Excluir
                            </Link>
                        </td>
                        <td>
                            <Link to={
                                {
                                    pathname:"/alterlivfunc",
                                    state:e
                                }
                            }>
                                Alterar
                            </Link>
                        </td>
                    </tr>
                ))}

            </tbody>
            
            </div>

        </body>
    );
}

