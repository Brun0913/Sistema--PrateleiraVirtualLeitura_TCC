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
    async SalvarLivro(parametro){
        console.log(parametro);
        let formdata = new FormData();

        formdata.append('nome', parametro.nome);
        formdata.append('autor', parametro.autor);
        formdata.append('genero', parametro.genero);
        formdata.append('preco', parametro.preco);
        formdata.append('paginas', parametro.paginas);
        formdata.append('idiomaprimario', parametro.idiomaprimario);
        formdata.append('sinopse', parametro.sinopse);
        formdata.append('publicacao', parametro.publicacao);
        formdata.append('editora', parametro.editora);
        formdata.append('numeroserie', parametro.numeroserie);
        formdata.append('edicaolivro', parametro.edicaolivro);
        formdata.append('imagem', parametro.imagem);
        
        const x = await api.post("NovoLivro", formdata,{
            headers:{ 'contenty-type' : 'multipart/form-data' }
        });
        return x;
    }

}
