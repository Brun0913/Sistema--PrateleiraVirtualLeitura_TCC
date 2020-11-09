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
        public List<Models.Response.GerenteResponse.VendasdoDiaResponse> VendasDoDia(Models.Request.RequestGerente.VendasdoDiaRequest req)
        {
            Utils.ConversorGerenteUtils.ConversordoRelatorioUtils relatorio = new Utils.ConversorGerenteUtils.ConversordoRelatorioUtils();
            Models.TccContext db = new Models.TccContext();

            List<Models.TbCompra> x = db.TbCompra.ToList();
            List<Models.Response.GerenteResponse.VendasdoDiaResponse> retorno = relatorio.ListaVendasdiaUtils(x);

            List<Models.Response.GerenteResponse.VendasdoDiaResponse> result = retorno.Where(x => x.dia.Day == req.dia.Day).ToList();
            return result;
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