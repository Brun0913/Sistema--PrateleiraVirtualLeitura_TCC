using System;
using System.Collections;
using System.Collections.Generic;

namespace backend.Models.Response.GerenteResponse
{
    public class GerenciarFinancasResponse
    {
        public int funcionariosativos {get;set;}
        public int totallivrosvendidos {get;set;}
        public decimal? lucromes {get;set;}
    }
}