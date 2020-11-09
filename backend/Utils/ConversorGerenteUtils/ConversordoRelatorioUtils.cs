using System;
using System.Collections;
using System.Collections.Generic;

namespace backend.Utils.ConversorGerenteUtils
{
    public class ConversordoRelatorioUtils
    {
        public Models.Response.GerenteResponse.VendasdoDiaResponse vendasdodiautils(Models.TbCompra req)
        {
            Models.Response.GerenteResponse.VendasdoDiaResponse ctx = new Models.Response.GerenteResponse.VendasdoDiaResponse();
            ctx.cliente = "teste";
            ctx.dia = req.DtCompra;
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

    }
}