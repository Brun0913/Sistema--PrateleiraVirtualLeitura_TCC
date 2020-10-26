import React from 'react'
import { useState } from 'react';
import './alterlivfunc.css';

import { Link } from 'react-router-dom'

import api from '../../Services/FuncoesFuncionario'

export default function AlterarLivroFunc(props){

    const funcoesfuncionario = new api();
    const [id,setId] = useState(props.location.state.id);
    const [livro,setLivro] = useState(props.location.state.livro);
    const [autor,setAutor] = useState(props.location.state.autor);
    const [genero,setGenero] = useState(props.location.state.genero);
    const [preco,setPreco] = useState(props.location.state.preco)
    const [paginas,setPaginas] = useState(props.location.state.paginas);
    const [idioma,setIdiomaprimario] = useState(props.location.state.idiomaprimario);
    const [sinopse,setSinopse] = useState(props.location.state.sinopse);
    const [publicacao,setPublicacao] = useState(props.location.state.publicacao);
    const [editora,setEditora] = useState(props.location.state.editora);
    const [numeroserie,setNumeroserie] = useState(props.location.state.numeroserie);
    const [edicaolivro,setEdicaolivro] = useState(props.location.state.edicaolivro);

    const atualizarRegistros = async() =>{
      const x = await funcoesfuncionario.AlterarLivro(id, {
        livro:livro,
        autor:autor,
        genero:genero, 
        preco:preco,
        paginas:paginas,
        idiomaprimario:idioma,
        sinopse:sinopse,
        publicacao:publicacao,
        editora:editora,
        numeroserie:numeroserie,
        edicaolivro:edicaolivro
      });
      return x;
    }

    return(
        <div classname="prialterlivfunc">

          <div className="titulo">
            <h1>Alterar Livro- Bookmananger</h1>
          </div>

          <div className="mainger">

          <div className="marcacaoalterliv">

            <div className="maralter">
              <label>Nome do Livro:</label>
            </div>

            <div className="maralter">
              <label>Nome do Autor:</label>
            </div>

            <div className="maralter">
              <label>Número de Série:</label>
            </div>

            <div className="maralter">
              <label>Nome da Editora:</label>
            </div>
            
            <div className="maralter">
              <label>Número de Páginas:</label>
            </div>

            <div className="maralter">
              <label>Sinopse:</label>
            </div>

            <div className="maralter">
              <label>Data de Publicação:</label>
            </div>

            <div className="maralter">
              <label>Idioma Original:</label>
            </div>

            <div className="maralter">
              <label>Gênero:</label>
            </div>

            <div className="maralter">
              <label>Edição do Livro:</label>
            </div>

            <div className="maralter">
              <label>Preço:</label>
            </div>

          </div>

          <div className="imputalterar">

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={livro}
              onChange={e => setLivro(e.target.value)}
            />
          </div>
          
          <div className="imputalter">
            <input
              id=""
              type="text"
              value={autor}
              onChange={e => setAutor(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={genero}
              onChange={e => setGenero(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="number"
              value={preco}
              onChange={e => setPreco.Number((e.target.value))}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="number"
              value={paginas}
              onChange={e => setPaginas(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={idioma}
              onChange={setIdiomaprimario}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={sinopse}
              onChange={e => setSinopse(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="date"
              value={publicacao}
              onChange={e => setPublicacao}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={editora}
              onChange={e => setEditora(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={numeroserie}
              onChange={e => setNumeroserie(e.target.value)}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              value={edicaolivro}
              onChange={e => setEdicaolivro(e.target.value)}
            />
          </div>

          <div className="botoesalterliv">
            <div className="alterliv">
              <button variant="gray" size="lg" block onClick={atualizarRegistros}>
                Alterar Livro
              </button>
            </div>
          </div>
          
              <div className="bvoltaralterliv">
                <Link to="/conlivfunc">
                 <button variant="gray" size="lg" block>
                   Voltar
                 </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
    )
} 

