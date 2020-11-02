using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class FuncoesGerenteController
    {
        [HttpGet("gerenciarfinancas")]
        public Models.Response.GerenteResponse.GerenciarFinancasResponse GerenciarFinancas()
        {
            Utils.ConversorGerenteUtils.ConversorGerenteUtils pegarinformacoes = new Utils.ConversorGerenteUtils.ConversorGerenteUtils();
            Database.ListagemTbDatabase db = new Database.ListagemTbDatabase();

            List<Models.TbEmpregado> funcionarios = db.ProcurarFuncionarios();
            int funcionariostotal = funcionarios.Count();

            List<Models.TbCompraLivro> livrosvendidostotal = db.Procurarcompralivro();
            int Livros = livrosvendidostotal.Count();

            List<Models.TbCompra> lucromes = db.ProcurarcomprasMes();
            List<decimal> listadevendas = new List<decimal>();
            foreach(Models.TbCompra item in lucromes)
            {
                listadevendas.Add(item.VlTotal);
            }
            decimal lucrototal = listadevendas.Sum();
            
            Models.Response.GerenteResponse.GerenciarFinancasResponse ctx = pegarinformacoes.convertgerenciarfinancas(funcionariostotal,Livros,lucrototal);
            return ctx;
        }  
        [HttpPost("cadastrarfuncionario")]
        public Models.Response.GerenteResponse.FuncionarioGerenteResponse cadastrarfunc(Models.Request.RequestGerente.RequestGerente req)
        {
            Models.TccContext db = new Models.TccContext();
            Utils.ConversorGerenteUtils.ConversorGerenteUtils modelotb = new Utils.ConversorGerenteUtils.ConversorGerenteUtils();
            Utils.ConversorGerenteUtils.GerarEmailFuncionario gerarnovoemailfunc = new Utils.ConversorGerenteUtils.GerarEmailFuncionario();

            Models.TbLogin novoemail = gerarnovoemailfunc.criaremailfunc(req);
            db.TbLogin.Add(novoemail);
            db.SaveChanges();

            Models.TbEmpregado novofunc = modelotb.ConvertReqparaTbEmpregado(req,novoemail);
            db.TbEmpregado.Add(novofunc);
            db.SaveChanges();

            Models.Response.GerenteResponse.FuncionarioGerenteResponse result = modelotb.ConverttbparaResponse(novofunc);
            return result;

        }

    }
}