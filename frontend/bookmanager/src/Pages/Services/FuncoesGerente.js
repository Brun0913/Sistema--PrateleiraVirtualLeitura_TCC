import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://localhost:5000/FuncoesGerente/"
})

export default class{

    async CadastrarNovoFuncionario(parametros){
        const x = await api.post("cadastrarfuncionario", parametros);
        return x.data;
    }
    async VendasporMes(){
        const x = await api.get("vendasdomes");
        return x.data;
    }
    async MelhoresClientes(){
        const x = await api.get("topclientes");
        return x.data;
    }
    async VendasdoDia(){
        const x = await api.get("vendasdodia");
        return x.data;
    }
    async MelhoresLivrosGrafico(){
        const x = await api.get("melhoreslivros");
        return x.data;
    }
    async MelhoresProdutos(){
        const x = await api.get("melhoresprodutos");
        return x.data;
    }
}
