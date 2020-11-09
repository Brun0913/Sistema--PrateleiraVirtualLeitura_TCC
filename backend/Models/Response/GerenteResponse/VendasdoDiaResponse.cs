using System;

namespace backend.Models.Response.GerenteResponse
{
    public class VendasdoDiaResponse
    {
        public DateTime dia {get;set;}
        public string cliente {get;set;}
        public decimal? valortotal {get;set;}
    }
}