import Axios from 'axios'
import { Zoom } from 'react-toastify';

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
<<<<<<< HEAD
        const x = api.post("fazercompra/"+ idlivro + "/" + idcliente)
        return x.data;
=======
        const x = api.post("fazercompra/"+ idlivro + "/" + idcliente);
        return x.data;
    }
    async Perfil(id){
        const x = await api.get("perfil/" + id);
        return x.data
>>>>>>> 340c7261cef78154604c5b35e4b714563d509949
    }
}