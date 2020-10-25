import React from 'react';
import './alterlivfunc.css'

import {Link} from 'react-router-dom'

function alterlivfunc(){
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
              //value={}
              //onChange={}
            />
          </div>
          
          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="date"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="page2">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          </div>

          <div className="botoes">

            <div className="cadasfunc">
              <button variant="gray" size="lg" block>
                Alterar Livro
              </button>

              <div className="bvoltar">
                <Link to="/menufuncionario">
                 <button variant="gray" size="lg" block>
                   Voltar
                 </button>
                </Link>
              </div>

            </div>

          </div>

        </div>

        </div>
    )
} 

export default alterlivfunc;
