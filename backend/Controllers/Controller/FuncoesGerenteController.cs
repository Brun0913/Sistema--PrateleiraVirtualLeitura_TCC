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
        [HttpGet("vendasdodia")]
        public List<Models.Response.GerenteResponse.VendasdoDiaResponse> VendasDoDia()
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils relatorio = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            Models.TccContext db = new Models.TccContext();

            DateTime dia = DateTime.Now;
            List<Models.TbCompra> x = db.TbCompra.ToList();
            List<Models.Response.GerenteResponse.VendasdoDiaResponse> retorno = relatorio.ListaVendasdiaUtils(x);

            List<Models.Response.GerenteResponse.VendasdoDiaResponse> result = retorno.Where(x => x.dia == dia.Day).ToList();
            return result;
        }
        [HttpGet("topclientes")]
        public List<Models.Response.GerenteResponse.topMelhoresClienteResponse> TopMelhoresClientes()
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils buscarclientes = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();

            List<Models.Response.GerenteResponse.topMelhoresClienteResponse> list = buscarclientes.melhoresCliente();
            List<Models.Response.GerenteResponse.topMelhoresClienteResponse> xx = list.OrderByDescending(x => x.qtdpedidos).ToList();

            List<Models.Response.GerenteResponse.topMelhoresClienteResponse> retoron = new List<Models.Response.GerenteResponse.topMelhoresClienteResponse>();
            for(int item = 0;item <= 10; item++)
            {
                retoron.Add(xx[item]);
            }
            return retoron;
        }

        [HttpGet("vendasdomes")]
        public List<Models.Response.GerenteResponse.VendasdoMesResponse> VendasdoMes()
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils buscar = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            List<Models.Response.GerenteResponse.VendasdoMesResponse> retorno = buscar.convertvendasmes();

            return retorno;
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