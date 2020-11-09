import React, {useState, useRef, useEffect} from "react";
import './Perfil.css';
import LoadingBar from 'react-top-loading-bar'

import { Link } from "react-router-dom";

import API from "../../Services/FuncoesCliente"

function MeuPerfil(props){
    const loadingBar = useRef(null);
    const api = new API();
    const [informacoes,setInfo] = useState([]);

    const perfilcliente = async()=>{
        loadingBar.current.continuousStart(); 
        const x = await api.Perfil(props.location.state.id);
        setInfo(x);
        loadingBar.current.complete();
    }
    useEffect(() => {
        perfilcliente();
      }, []);


    return(
        <div className='um'>
            <LoadingBar
            height={4}
            color='#f11946'
            ref={loadingBar}
            />
            <div className='perfi1'>
                <h1>Meu Perfil</h1>
            </div>

            <div className='dois'>

                <div className='pai'>

                    <div className='pessoa'>
                        <h4>Nome: {informacoes.cliente}</h4>
                    </div>

                    <div className='niver'>
                        <h4>Data de nascimento: {informacoes.nascimento}</h4>
                    </div>

                    <div className='cpf'>
                        <h4>CPF:{informacoes.cpf}</h4>
                    </div>

                    <div className='rg'>
                        <h4>R.G.: {informacoes.rg} </h4>
                    </div>

                    <div className='cartao'>
                        <h4>Número do cartão: {informacoes.cartaocredito} </h4>
                    </div>

                    <div className='rua'>
                        <h4>Endereço: {informacoes.endereco} </h4>
                    </div>
            </div>

                    <div className="voltar">
                        <Link to={{
                            pathname:"/menucliente",
                            state:props.location.state
                        }}>
                           <button variant="secondary" size="lg" block>
                                Voltar
                           </button> 
                        </Link>
                    </div>

                        <div className='baixo'>
                        <h3 className="color">Direitos do site reservados @CopyRight</h3>
                        </div>


            </div>  
        </div>
    )
}


export default MeuPerfil;
