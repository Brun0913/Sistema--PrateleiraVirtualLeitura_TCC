import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://3.82.146.171:5000/funcoescliente"
})

export default class FuncoesCliente{

    async HistoricoCompras(id){
        const x = await api.get("/historicodecompra/" + id);
        return x.data;
    }
    async ConsultarLivro(){
        const x = await api.get('/fazercompra');
        return x.data;
    }
    async FazerCompra(idlivro,idcliente){
<<<<<<< HEAD
        const x = api.post("/fazercompra/"+ idlivro + "/" + idcliente)
        return x.data;
    }
    async Perfil(id){
        const x = await api.get("/perfil/" + id);
        return x.data;
=======
        const x = api.post("fazercompra/"+ idlivro + "/" + idcliente)
        return x.data;;
    }
    async Perfil(id){
        const x = await api.get("perfil/" + id);
        return x.data
>>>>>>> abb956a0a25a03dc39c5027e324333df5edbc4b9
    }
}
