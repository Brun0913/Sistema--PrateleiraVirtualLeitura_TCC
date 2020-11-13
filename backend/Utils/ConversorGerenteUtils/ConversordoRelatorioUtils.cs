using System;
using System.Collections.Generic;
using System.Linq;

using Microsoft.EntityFrameworkCore;

namespace backend.Utils.ConversorGerenteUtils
{
    public class ConversordoRelatorioUtils
    {
        public Models.Response.GerenteResponse.VendasdoDiaResponse vendasdodiautils(Models.TbCompra req)
        {
            Models.Response.GerenteResponse.VendasdoDiaResponse ctx = new Models.Response.GerenteResponse.VendasdoDiaResponse();
            
            ctx.cliente = req.IdClienteNavigation.NmCliente;
            ctx.dia = req.DtCompra.Day;
            ctx.valortotal = req.VlTotal;

            return ctx;
        }
        public List<Models.Response.GerenteResponse.VendasdoDiaResponse> ListaVendasdiaUtils(List<Models.TbCompra> req)
        {
            List<Models.Response.GerenteResponse.VendasdoDiaResponse> ctx = new List<Models.Response.GerenteResponse.VendasdoDiaResponse>();

            foreach(Models.TbCompra item in req)
            {
                ctx.Add(vendasdodiautils(item));
            }
            return ctx;
        }
        public Models.Response.GerenteResponse.VendasdoMesResponse ConvertVendasdoMes(int mes)
        {
            Models.Response.GerenteResponse.VendasdoMesResponse ctx = new Models.Response.GerenteResponse.VendasdoMesResponse();
            Utils.ConversorparaMesesUtils convert = new Utils.ConversorparaMesesUtils();
            Models.TccContext db = new Models.TccContext();

            List<Models.TbCompra> compras = db.TbCompra.ToList();
            List<decimal?> valor = new List<decimal?>();
            foreach(Models.TbCompra item in compras.Where(x => x.DtCompra.Month == mes))
            {
                valor.Add(item.VlTotal);
            }
            decimal? valortotal = valor.Sum();
            int? qtdvendas = valor.Count();
            string mesresponse = convert.mesescolhido(mes);

            ctx.mes = mesresponse;
            ctx.lucromensal = valortotal;
            ctx.qtdvendas = qtdvendas;

            return ctx;
        }
        public List<Models.Response.GerenteResponse.VendasdoMesResponse> convertvendasmes()
        {
            List<Models.Response.GerenteResponse.VendasdoMesResponse> result = new List<Models.Response.GerenteResponse.VendasdoMesResponse>();

            for(int meses = 1;meses <= 12; meses++)
            {
                result.Add(ConvertVendasdoMes(meses));
            }
            return result;
        }
        public List<Models.Response.GerenteResponse.topMelhoresClienteResponse> melhoresCliente()
        {
            Models.Response.GerenteResponse.topMelhoresClienteResponse x = new Models.Response.GerenteResponse.topMelhoresClienteResponse();
            List<Models.Response.GerenteResponse.topMelhoresClienteResponse> result = new List<Models.Response.GerenteResponse.topMelhoresClienteResponse>();
            Models.TccContext db = new Models.TccContext();

            List<Models.TbCompra> compras = db.TbCompra.Include(x => x.IdClienteNavigation).ToList();
            List<Models.TbCliente> cliente = db.TbCliente.Include(x => x.IdLoginNavigation).ToList();
            List<Models.TbLogin> logins = db.TbLogin.Where(x => x.DsPerfil == "cliente").ToList();
            
            foreach(Models.TbCliente info in cliente)
            {
                List<Models.TbCompra> comprasdocliente = compras.Where(x => x.IdCliente == info.IdCliente).ToList();
                List<Decimal?> valores = new List<decimal?>();

                foreach(Models.TbCompra item in comprasdocliente)
                    valores.Add(item.VlTotal);

                decimal? totalgasto = valores.Sum();

                x.email = info.IdLoginNavigation.DsEmail;
                x.nome = info.NmCliente;
                x.telefone = info.DsTelefone;
                x.qtdpedidos = comprasdocliente.Count();
                x.totaldegastos = totalgasto;

                result.Add(x);
            }
            return result;
        }
    }
}