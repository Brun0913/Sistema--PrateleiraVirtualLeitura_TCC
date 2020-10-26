import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://3.82.146.171:5000/FuncoesFuncionario/"
})

export default class{

    async DeletarLivro(id){
        const x = await api.delete('apagarlivro/' + id);
        return x.data;
    }

    async AlterarLivro(id, novosparametros){
        const x = await api.put('alterarlivro/' + id, novosparametros);
        return x.data;
    }

    async ConsultarLivros(){
        const x = await api.get('consultarlivros');
        return x.data;
    }

}
