using System;
using System.Collections;

namespace backend.Controllers.Business.BusinessFuncionario
{
    public class inserirNovoLivroVerificar
    {
        InserirNovoLivroParte1 camposvazios = new InserirNovoLivroParte1();
        Database.FuncoesFuncionarioDataBase inserir = new Database.FuncoesFuncionarioDataBase();
        public Models.TbLivro verificarparametros(Models.TbLivro tb)
        {
            camposvazios.campovazioautor(tb);
            camposvazios.campovazioedicaolivro(tb);
            camposvazios.campovazioeditora(tb);
            camposvazios.campovaziogenero(tb);
            camposvazios.campovazioidioma(tb);
            camposvazios.campovaziolivro(tb);
            camposvazios.campovazionumeropaginas(tb);
            camposvazios.campovaziopreco(tb);
            camposvazios.campovaziopublicacao(tb);
            camposvazios.campovaziosinopse(tb);

            Models.TbLivro x = inserir.inserir(tb);
            return x;
        }
    }
}