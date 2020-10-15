using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CriarContaController
    {
        Business.VerificarContaBusiness verificacoes = new Business.VerificarContaBusiness();
        Models.TccContext db = new Models.TccContext();
        Utils.CriarContaUtils converter = new Utils.CriarContaUtils();


        [HttpPost("Criarnovaconta")]
        public Models.Response.CriarContaRequest CriarNovaConta(Models.Request.LoginRequest req)
        {
            Models.Response.CriarContaRequest result = verificacoes.verificarparametroscliente(req);
            return result;
        }
    }
}