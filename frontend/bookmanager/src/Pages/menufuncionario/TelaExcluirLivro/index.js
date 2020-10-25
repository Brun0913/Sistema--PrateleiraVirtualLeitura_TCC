import React, { useState } from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import api from '../../Services/FuncoesFuncionario'

export default function ExcluirLivro(props){

    const API = new api();

    const ConfirmarExcluicao = async () =>{
        const result = await API.DeletarLivro(props.location.state.id);
        toast.info('🚀 Livro Excluído com sucesso!');
    }

    return(
        <div className="containersupremo">
            <div className="container">

                <div className="container2">
                    <div className="divisor">
                        <h2>Excluir Livro!</h2>
                    </div>

                    <div className="divisor2">
                        <h5>você tem certeza que deseja exlcuir o livro chamado(a) {props.location.state.livro}?</h5>
                    </div>

                    <div className="alinhamento">
                        <div>
                            <Link to="*" className="btn btn-dark botao1">Não</Link>
                        </div>
                        <div>
                            <button onClick={ConfirmarExcluicao} className="btn btn-danger botao2">Sim</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}