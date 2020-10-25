using System;
using System.Collections.Generic;
using System.Linq;
using System.Collections;

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

        public Models.Response.FuncionarioResponse.ModeloCompletoLivroRespone TbLivroparaLivroResponseCompleto(Models.TbLivro request)
        {
            Models.Response.FuncionarioResponse.ModeloCompletoLivroRespone response = new Models.Response.FuncionarioResponse.ModeloCompletoLivroRespone();

            response.id = request.IdLivro;
            response.autor = request.NmAutor;
            response.livro = request.NmLivro;
            response.editora = request.NmEditora;
            response.paginas = request.NrPaginas;
            response.numeroserie = request.NrSerie;
            response.idiomaprimario = request.TpIdiomaOriginal;
            response.preco = request.VlPreco;
            response.edicaolivro = request.DsEdicaoLivro;
            response.genero = request.DsGenero;
            response.sinopse = request.DsSinopse;
            response.publicacao = request.DtPublicacao;

            return response;
        }
    }
}