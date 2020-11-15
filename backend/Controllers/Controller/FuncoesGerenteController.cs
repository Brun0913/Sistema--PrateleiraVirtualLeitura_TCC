using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class FuncoesGerenteController
    {
        [HttpGet("vendasdodia")]
        public List<Models.Response.GerenteResponse.VendasdoDiaResponse> VendasDoDia()
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils relatorio = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            Models.TccContext db = new Models.TccContext();

            DateTime dia = DateTime.Now;
            List<Models.TbCompra> x = db.TbCompra.Include(x => x.IdClienteNavigation).ToList();
            List<Models.Response.GerenteResponse.VendasdoDiaResponse> retorno = relatorio.ListaVendasdiaUtils(x);

            List<Models.Response.GerenteResponse.VendasdoDiaResponse> result = retorno.Where(x => x.dia == dia.Day).ToList();
            return result;
        }
        [HttpGet("topclientes")]
        public List<Models.Response.GerenteResponse.topMelhoresClienteResponse> TopMelhoresClientes()
        {
            Models.TccContext db = new Models.TccContext();
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils buscarclientes = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            List<Models.Response.GerenteResponse.topMelhoresClienteResponse> ctx = new List<Models.Response.GerenteResponse.topMelhoresClienteResponse>();

            List<Models.TbCompra> compras = db.TbCompra.Include(x => x.IdClienteNavigation).ToList();
            foreach(Models.TbCompra item in compras)
            {
                Models.Response.GerenteResponse.topMelhoresClienteResponse osmelhores = buscarclientes.melhoresCliente(item);
                Models.Response.GerenteResponse.topMelhoresClienteResponse existente = ctx.FirstOrDefault(x => x.telefone == osmelhores.telefone);
                if(existente == null)
                    ctx.Add(osmelhores);
                else
                    continue;
            }
            return ctx.OrderByDescending(x => x.totaldegastos).Take(10).ToList();
        }

        [HttpGet("vendasdomes")]
        public List<Models.Response.GerenteResponse.VendasdoMesResponse> VendasdoMes()
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils buscar = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            List<Models.Response.GerenteResponse.VendasdoMesResponse> retorno = buscar.convertvendasmes();

            return retorno;
        }
        [HttpGet("melhoresprodutos")]
        public List<Models.Response.GerenteResponse.TopMelhoresProdutosResponse> MelhoresProdutos()
        {
            Models.TccContext db = new Models.TccContext();
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils convert = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();

            List<Models.Response.GerenteResponse.TopMelhoresProdutosResponse> produtos = new List<Models.Response.GerenteResponse.TopMelhoresProdutosResponse>();
            List<Models.TbCompraLivro> compra = db.TbCompraLivro.Include(x => x.IdCompraNavigation)
                                                                .Include(x => x.IdLivroNavigation).ToList();

            foreach(Models.TbCompraLivro item in compra)
            {
                Models.Response.GerenteResponse.TopMelhoresProdutosResponse x = convert.adicionarprodutos(item);

                produtos.Add(x);
            }

            return produtos.OrderByDescending(x => x.lucrogeral).Take(10).ToList();
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

        [HttpDelete]
        public void DeletarFuncionario(Models.Request.RequestGerente.DeletarFuncRequest funcionario)
        {
            Models.TccContext context = new Models.TccContext();

            Models.TbEmpregado paraDeletar = context.TbEmpregado.First(emp => emp.IdEmpregado == funcionario.IdFunc);
            context.Remove(paraDeletar);
            
            Models.TbLogin paraDeletarOnLogin = context.TbLogin.First(lgn => lgn.IdLogin == funcionario.IdLogin);
            context.Remove(paraDeletarOnLogin);

            context.SaveChanges();
               
        }


    }
}