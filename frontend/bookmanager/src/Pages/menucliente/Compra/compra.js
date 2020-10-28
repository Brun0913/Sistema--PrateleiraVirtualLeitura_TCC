import React from 'react';
import'./compra.css';
import {Link} from 'react-router-dom';

import livroUm from'./livro-um.png'

function compra(){
    return(
        <div className='mae'>
            
            <div className ='titulo'>
                <h1>Título do Livro</h1>
            </div>


            <div className='book'>

                <div className='livro'>
                    <img src={livroUm}/>
                </div>

                <div className='sinopse'>
                    <h3>Sinopse</h3>
                    <h4>Os gêmeos passam as férias na casa do seu tio-avô Stanford Pines, um trapaceiro que transformou sua própria casa em uma 'cabana de mistérios', uma atração com várias criaturas, lendas e mistérios falsos para atrair e enganar turistas para conseguir dinheiro.</h4>
                </div>

                <div className='preco'>
                    <h2>R$50,99</h2>
                </div>

                <div className='comprar'>
                    <button variant="gray" size="lg" block>
                        <a href='/finalizar'>
                            <h4>Comprar</h4>
                        </a>
                    </button>
                </div>


            </div>

            <div className="voltar">
                <button variant="gray" size="lg" block>
                    <a href='/fazerCompra'> Voltar </a>
                </button>
            </div>

            <div className='caracteristica'>

                <div className='odin'>
                     <h1>Características</h1>
                </div>

                <div className='pag'>
                    <h3>Nº de páginas</h3>
                </div>
                
                <div className='autor'>
                    <h3>Nome do Autor</h3>
                </div>

                <div className='editor'>
                    <h3>Editora</h3>
                </div>

                <div className='publicacao'>
                    <h3>Data de Publicação</h3>
                </div>

                <div className=' serie'>
                    <h3>Nº de Série</h3>
                </div>

                <div className='genero'>
                    <h3>Gênero</h3>
                </div>

            </div>

           
        </div>
    )
}


export default compra;