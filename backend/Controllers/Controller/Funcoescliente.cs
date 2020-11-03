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
        public class Funcoescliente
    {

        [HttpGet("historicodecompra/{id}")]
        public List<Models.Response.ClienteResponse.ModeloHistóricoCompra> historicodecompra(int id)
        {
            Models.TccContext db = new Models.TccContext();
            Utils.FuncoesClienteUtils.HistoricoCompraUtils converterhistorico = new Utils.FuncoesClienteUtils.HistoricoCompraUtils();
            
            Models.TbCliente cliente = db.TbCliente.First(x => x.IdLogin == id);
            List<Models.TbCompraLivro> retorno = db.TbCompraLivro.Include(x => x.IdCompraNavigation)
                                                                 .Include(x => x.IdLivroNavigation)
                                                                 .ToList();

            List<Models.Response.ClienteResponse.ModeloHistóricoCompra> x = converterhistorico.returntcompra(retorno);
            List<Models.Response.ClienteResponse.ModeloHistóricoCompra> zz = x.Where(x =>x.id == cliente.IdCliente).ToList();
            return zz;
        }
        

        
        [HttpGet("fazercompra")]
        public List<Models.Response.ClienteResponse.FazerCompra> fazercompra()
        {
            Business.BusinessFuncionario.ProcurarResgistroLivrosBusiness buscar = new Business.BusinessFuncionario.ProcurarResgistroLivrosBusiness();
            Utils.FuncoesClienteUtils.HistoricoCompraUtils convertblivro = new Utils.FuncoesClienteUtils.HistoricoCompraUtils();

            List<Models.TbLivro> modellivro = buscar.buscarlivros();

            List<Models.Response.ClienteResponse.FazerCompra> modelolivro = convertblivro.convertcompralist(modellivro);
            return modelolivro;
        }

        [HttpPost("fazercompra/{idlivro}/{idcliente}")]
        public void fazercompra2 (int idlivro,int idcliente)
        {
            Models.TccContext db = new Models.TccContext();
            Utils.FuncoesClienteUtils.HistoricoCompraUtils convert = new Utils.FuncoesClienteUtils.HistoricoCompraUtils();
            Models.Request.RequestCliente.FazerCompraRequest compra = new Models.Request.RequestCliente.FazerCompraRequest();

            Models.TbLivro parte1 = db.TbLivro.First(x => x.IdLivro == idlivro);
            DateTime agr = DateTime.Now;
            Decimal? preco = parte1.VlPreco;

            Models.Request.RequestCliente.FazerCompraRequest ctx = convert.convertfazercompra(idcliente,preco,agr);
            Models.TbCompra z = convert.convertfazercompratb(ctx);
            db.TbCompra.Add(z);
            db.SaveChanges();

            Models.TbCompraLivro partefinal = convert.converttbcompralivro(z,parte1);
            db.TbCompraLivro.Add(partefinal);
            db.SaveChanges();
        }

        [HttpGet("perfil/{idlogin}")]
        public Models.Response.ClienteResponse.PerfilResponse perfil(int idlogin)
        {
            Models.TccContext db = new Models.TccContext();
            Utils.FuncoesClienteUtils.HistoricoCompraUtils convert = new Utils.FuncoesClienteUtils.HistoricoCompraUtils();

            Models.TbCliente cliente = db.TbCliente.First(x => x.IdLogin == idlogin);
            Models.Response.ClienteResponse.PerfilResponse retorno = convert.convertperfil(cliente);

            return retorno;
        }

    }
}