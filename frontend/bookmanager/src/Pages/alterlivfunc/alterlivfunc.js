import React from 'react';
import './alterlivfunc.css';

import {Link} from 'react-router-dom'

function alterlivfunc(){
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
              //value={}
              //onChange={}
            />
          </div>
          
          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="date"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          <div className="imputalter">
            <input
              id=""
              type="text"
              //value={}
              //onChange={}
            />
          </div>

          </div>

          <div className="botoesalterliv">

            <div className="alterliv">
              <button variant="gray" size="lg" block>
                Alterar Livro
              </button>

              <div className="bvoltaralterliv">
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
