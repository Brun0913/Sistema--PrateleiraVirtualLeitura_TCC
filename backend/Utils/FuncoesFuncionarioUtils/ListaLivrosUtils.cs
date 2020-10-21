using System;
using System.Collections.Generic;
using System.Linq;

namespace backend.Utils.FuncoesFuncionarioUtils
{
    public class ListaLivrosUtils
    {
        public Models.Response.FuncionarioResponse.ModeloTbLivroResponse TbLivroparaLivroResponse(Models.TbLivro reg)
        {
            Models.Response.FuncionarioResponse.ModeloTbLivroResponse ctx = new Models.Response.FuncionarioResponse.ModeloTbLivroResponse();

            ctx.id = reg.IdLivro;
            ctx.livro = reg.NmLivro;
            ctx.autor = reg.NmAutor;
            ctx.publicacao = reg.DtPublicacao;
            ctx.sinopse = reg.DsSinopse;
            ctx.preco = reg.VlPreco;
            ctx.paginas = reg.NrPaginas;
            ctx.idiomaprimario = reg.TpIdiomaOriginal;
            ctx.genero = reg.DsGenero;

            return ctx;
        }

        public List<Models.Response.FuncionarioResponse.ModeloTbLivroResponse> ConverterlistaTbLivro(List<Models.TbLivro> registros)
        {
            List<Models.Response.FuncionarioResponse.ModeloTbLivroResponse> novalista = new List<Models.Response.FuncionarioResponse.ModeloTbLivroResponse>();

            foreach(Models.TbLivro livro in registros)
            {
                novalista.Add(TbLivroparaLivroResponse(livro));
            }
            return novalista;
        }
    }
}