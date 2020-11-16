import Axios from 'axios'

const api = Axios.create({
    baseURL:"http://localhost:5000/FuncoesFuncionario/"
})

export default class{

    async AlterarLivro(novosparametros){
        const x = await api.put('alterarlivro', novosparametros);
        return x.data;
    
    }

    async ConsultarLivros(){
        const x = await api.get('consultarlivros');
        return x.data;
    }
    async SalvarLivro(parametro){
        const formdata = new FormData();
        console.log(parametro);

        formdata.append('livro', parametro.livro);
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
        console.log(formdata);
        const x = await api.post("NovoLivro", formdata,{
            headers:{ "content-type": "multipart/form-data" }
        });
        console.log(x.data);
        return x.data;
    }

}
