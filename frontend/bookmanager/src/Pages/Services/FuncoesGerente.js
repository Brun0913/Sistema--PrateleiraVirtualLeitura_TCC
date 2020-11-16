import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://3.82.146.171:5000/FuncoesGerente/"
})

export default class{

    async CadastrarNovoFuncionario(parametros){
        console.log(parametros);
        const x = await api.post("cadastrarfuncionario", parametros);
        console.log(x.data);
        return x.data;

    }
    async GerenciarFinancas(){
        const x = await api.get("gerenciarfinancas");
        return x.data;
    }
}
