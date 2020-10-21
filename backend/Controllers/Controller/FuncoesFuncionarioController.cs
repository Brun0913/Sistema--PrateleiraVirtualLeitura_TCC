using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class FuncoesFuncionarioController
    {

        [HttpDelete("apagarlivro/{id}")]
        public ActionResult<Models.Response.ResponsedoFuncionario.RegistroLivroResponse> excluirlivro (int id)
        {
            try{
            Business.FuncoesFuncionario.ResgitroExistente verificarregistro = new Business.FuncoesFuncionario.ResgitroExistente();
            Utils.FuncoesFuncionarioUtils.RegistroLivroUtils converter = new Utils.FuncoesFuncionarioUtils.RegistroLivroUtils();

            Models.TbLivro resultado = verificarregistro.VerificarRegistro(id);

            Models.Response.ResponsedoFuncionario.RegistroLivroResponse x  = converter.registrolivroapagado(resultado);
            return x;
            }
            catch(System.Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(ex,404)
                );
            }
        }

        [HttpGet("consultarlivros")]
        public ActionResult<List<Models.Response.FuncionarioResponse.ModeloTbLivroResponse>> consultarlivro()
        {
            try{
            Business.BusinessFuncionario.ProcurarResgistroLivrosBusiness buscar = new Business.BusinessFuncionario.ProcurarResgistroLivrosBusiness();
            Utils.FuncoesFuncionarioUtils.ListaLivrosUtils convertertblivro = new Utils.FuncoesFuncionarioUtils.ListaLivrosUtils();

            List<Models.TbLivro> ModeloTb = buscar.buscarlivros();
            List<Models.Response.FuncionarioResponse.ModeloTbLivroResponse> ModeloPersonalizado = convertertblivro.ConverterlistaTbLivro(ModeloTb);
            return ModeloPersonalizado;
            }
            catch(System.Exception ex)
            {
                return new BadRequestObjectResult(
                    new Models.Response.ErroResponse(ex,400)
                );
            }
        }
    }
}