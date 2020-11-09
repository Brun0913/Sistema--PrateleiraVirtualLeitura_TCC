import React from 'react'
import {Link} from 'react-router-dom'
import './excluirfunc.css'

function excluirfunc(){
    return(
       <div className="containerexcluirfunc"> 
        <div className="divprincipaef">
            <div className="tituloexcluirfunc">
                <h1>ATENÇÃO!</h1>
            </div>

            <div className="avisoexcluirfunc">
                <h5>Tem certeza que desja excluir o funcionário do sistema?</h5>
            </div>

            <div className="botoesexcluirfunc">
                <div>
                  <Link className="btn btn-dark botao1">Sim</Link>
                </div>

                <div>
                  <Link to="/gergerenfunc" className="btn btn-dark botao1">Não</Link>
                </div>
            </div>

        </div>
     </div>
    )
}

export default excluirfunc;