import React from 'react';

import {useState} from 'react'
import './conlivfunc.css';
import {Link} from 'react-router-dom';
import { Search } from "react-bootstrap-icons";

import api from '../../Services/FuncoesFuncionario'

export default function conlivfunc(){

    const funcoes = new api();
    const [livros,setLivros] = useState();

    const buscarlivros = async () =>{
        const x = await funcoes.ConsultarLivros();
        setLivros([...x]);
    }

    return(
        <div className="priconlivfunc">

            <div className="titulo">
                <h1>Consultar Livros</h1>
            </div>

            <div className="maingergerenfunc">
                <h4>Buscar Livros</h4>

                <Search size={16} style={{ cursor: "pointer"}} />
            
            </div>
  
            <div className="bvoltargerenfunc">
               <button variant="gray" size="lg" block>
                  Voltar
               </button>
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

        </div>
    );
}

