import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://localhost:5000/FuncoesGerente/"
})

export default class{

    async CadastrarNovoFuncionario(parametros){
        const x = await api.post("cadastrarfuncionario", parametros);
        return x.data;
    }

    async GerenciarFinancas(){
        const x = await api.get("gerenciarfinancas");
        return x.data;
    }
}