import React from 'react'
import './gercadfunc.css'

import { Link } from 'react-router-dom';

function Gercadfunc(){
    return(
        <div className="prigercad">

            <div className="titulo">
                <h1>Cadastro de Funcionário</h1>
            </div>

            <div className="mainger">
                

                <div className="marcacao">

                    <div className="page">
                        <label>Nome:</label>
                    </div>

                    <div className="page">
                        <label>Nº da Carteira de Trabalho:</label>
                    </div>

                    <div className="page">
                        <label>CPF:</label>
                    </div>

                    <div className="page">
                        <label>CEP:</label>
                    </div>

                    <div className="page">
                        <label>R.G.:</label>
                    </div>

                    <div className="page">
                        <label>Carga Horária Semanal:</label>
                    </div>

                    <div className="page">
                        <label>Data de Nascimento:</label>
                    </div>

                    <div className="page">
                        <label>Salário:</label>
                    </div>

                 </div>   

                    <div className="imput">

                        <div className="page2">
                             <input type="text" placeholder="Insira o nome completo"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira o Nº da carteira de trabalho completo"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira o CPF completo"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira o CEP completo"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira o R.G. completo"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira a carga semanal do funcionário"/>
                        </div>

                        <div className="page2">
                             <input type="date"/>
                        </div>

                        <div className="page2">
                             <input type="text" placeholder="Insira o salário do funcionário"/>
                        </div>

                    </div>

                    <div className="botoes">

                        <div className="cadasfunc">
                           <button variant="gray" size="lg" block>
                              Cadastrar Funcionário
                           </button>
                        </div>
                        
                        <Link to='/menugerente'>
                        <div className="bvoltar">
                           <button variant="gray" size="lg" block>
                              Voltar
                           </button>
                        </div>
                        </Link>

                    </div>

            </div>

        </div>
    )
}

export default Gercadfunc;