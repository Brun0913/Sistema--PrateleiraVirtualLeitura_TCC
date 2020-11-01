import Axios from 'axios'

const api = Axios.create({
    BaseUrl:"http://localhost:5000/Funcoescliente/"
})

export default class FuncoesCliente{

    async HistoricoCompras(id){
        const x = await api.get("historicodecompra" + id);
        return x.data;
    }
    async ConsultarLivro(){
        const x = await api.get();
        return x.data;
    }
    async FazerCompra(idlivro,idcliente){
        const x = api.post("fazercompra/"+ idlivro + "/" + "idcliente")
    }
}