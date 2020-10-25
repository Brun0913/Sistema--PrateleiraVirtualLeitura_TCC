<<<<<<< HEAD:frontend/bookmanager/src/Pages/menufuncionario/alterlivfunc/alterlivfunc.js
import React from 'react'
import { useState } from 'react';
import './alterlivfunc.css';
=======
import React from 'react';
import './alterlivfunc.css'
>>>>>>> 16b6025b12a06a1bc88a96b0bcb297fe0befaffd:frontend/bookmanager/src/Pages/alterlivfunc/alterlivfunc.js

import { Link } from 'react-router-dom'

import api from '../../Services/FuncoesFuncionario'

function alterlivfunc(props){

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

          <div className="mainalterliv">

          <div className="marcacao">

            <div className="page">
              <label>Nome do Livro:</label>
            </div>

            <div className="page">
              <label>Nome do Autor:</label>
            </div>

            <div className="page">
              <label>Número de Série:</label>
            </div>

            <div className="page">
              <label>Nome da Editora:</label>
            </div>
            
            <div className="page">
              <label>Número de Páginas:</label>
            </div>

            <div className="page">
              <label>Sinopse:</label>
            </div>

            <div className="page">
              <label>Data de Publicação:</label>
            </div>

            <div className="page">
              <label>Idioma Original:</label>
            </div>

            <div className="page">
              <label>Gênero:</label>
            </div>

            <div className="page">
              <label>Edição do Livro:</label>
            </div>

            <div className="page">
              <label>Preço:</label>
            </div>

          </div>

          <div className="imput">

          <div className="page2">
            <input
              id=""
              type="text"
              value={livro}
              onChange={e => setLivro(e.target.value)}
            />
          </div>
          
          <div className="page2">
            <input
              id=""
              type="text"
              value={autor}
              onChange={e => setAutor(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={genero}
              onChange={e => setGenero(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="number"
              value={preco}
              onChange={e => setPreco.Number((e.target.value))}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="number"
              value={paginas}
              onChange={e => setPaginas(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={idioma}
              onChange={setIdiomaprimario}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={sinopse}
              onChange={e => setSinopse(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="date"
              value={publicacao}
              onChange={e => setPublicacao}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={editora}
              onChange={e => setEditora(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={numeroserie}
              onChange={e => setNumeroserie(e.target.value)}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              value={edicaolivro}
              onChange={e => setEdicaolivro(e.target.value)}
            />
          </div>

          </div>

          <div className="botoes">

<<<<<<< HEAD:frontend/bookmanager/src/Pages/menufuncionario/alterlivfunc/alterlivfunc.js
            <div className="alterliv">
              <button variant="gray" size="lg" block onClick={atualizarRegistros}>
                Alterar Livro
              </button>

              <div className="bvoltaralterliv">
                <Link to="/conlivfunc">
=======
            <div className="cadasfunc">
              <button variant="gray" size="lg" block>
                Alterar Livro
              </button>

              <div className="bvoltar">
                <Link to="/menufuncionario">
>>>>>>> 16b6025b12a06a1bc88a96b0bcb297fe0befaffd:frontend/bookmanager/src/Pages/alterlivfunc/alterlivfunc.js
                 <button variant="gray" size="lg" block>
                   Voltar
                 </button>
                </Link>
              </div>

            </div>
<<<<<<< HEAD:frontend/bookmanager/src/Pages/menufuncionario/alterlivfunc/alterlivfunc.js
=======

>>>>>>> 16b6025b12a06a1bc88a96b0bcb297fe0befaffd:frontend/bookmanager/src/Pages/alterlivfunc/alterlivfunc.js
          </div>

        </div>

        </div>
    )
} 

export default alterlivfunc;
