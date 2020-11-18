import React from 'react';
import './topclientes.css';

import {Link} from 'react-router-dom';

function topclientes(){
    return(
        <div className="prigerente">

            <div className="maingerente">
                <div id="secgerente">
                    <h1>Relatório Top Clientes</h1>
                </div>
            </div>

            <div id="grandecontainer">
                <div id="container1"></div>

                <div id="container2">

                </div>

                <div id="container3"></div>

                <div id="Avoltar">
                     <Link to="/gerenciarfinancas">
                         <button variant="gray" size="lg" block>
                             Voltar
                         </button>
                     </Link>
               </div>

            </div>

            <div id="thirdgerente">
                <h2>Direitos do site reservados @Copyright</h2>
            </div>
        </div>
    )
}

export default topclientes;
