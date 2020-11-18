import React from 'react';
import './grafico.css';

import {Link} from 'react-router-dom';
import { Chart } from "react-google-charts";

function grafico(){
    return(
        <div className="prigerente">
            
            <div className="maingerente">
                <div id="secgerente">
                    <h1>Relatório Gráfico</h1>
                </div>
            </div>

            <div id="grandecontainer">
                <div id="container1"></div>

                <div id="conteudorelatorio">

                <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                  ['Task', 'Hours per Day'],
                  ['Work', 11],
                  ['Eat', 2],
                  ['Commute', 2],
                  ['Watch TV', 2],
                  ['Sleep', 7],
                  ]}
                  options={{
                  title: 'My Daily Activities',
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
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

export default grafico;