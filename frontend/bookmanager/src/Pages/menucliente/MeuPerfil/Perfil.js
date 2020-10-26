import React from "react";
import './Perfil.css';

import { Link } from "react-router-dom";

function MeuPerfil(){
    return(
    <div className='mae'>
        <div className='perfi1'>
            <h1>Meu Perfil</h1>
        </div>

        <div className='pai'>


            <div className='pessoa'>
                <h3>Nome</h3>
            </div>
            
            <div className='niver'>
                <h3>Data de nascimento</h3>
            </div>

            <div className='cpf'>
                <h3>CPF</h3>
            </div>

            <div className='rg'>
                <h3>R.g</h3>
            </div>

            <div className='cartao'>
                <h3>Número do cartão</h3>
            </div>

            <div className='CDC'>
                <h3>Código de segurança (cartão) </h3>
            </div>

            <div className='vencimento'>
                <h3>Data de vencimento do cartão</h3>
            </div>

            <div className='rua'>
                <h3>Endereço</h3>
            </div>


            </div>
            
            


            <div className="voltar">
                <Link to="/menucliente">
                    <button variant="gray" size="lg" block>
                        Voltar
                    </button> 
                </Link>
            </div>

        </div>
    )
}


export default MeuPerfil;