import Axios from 'axios'

const API = Axios.create({
    baseURL:"http://localhost:5000/criarconta"
});

export default class Funcoes{

    async CriarConta(parametros){
        const x = await API.post('/Criarnovaconta', parametros);
        return x.data;
    }

    async Logar(parametros){
        const x = await API.post('/acessar',parametros);
        return x.data;
    }
}
