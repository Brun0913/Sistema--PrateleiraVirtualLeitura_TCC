using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers.Business
{
    public class VerificarContaBusiness
    {
        Database.VerificarContaDatabase salvar = new Database.VerificarContaDatabase();
        Business.RequisitosMinimos minimosdecaracteres = new RequisitosMinimos();
        Business.CamposVazios camposvazios = new CamposVazios();

         public Models.Response.CriarContaRequest verificarparametroscliente(Models.Request.CriarContaRequest conta)
        {

            minimosdecaracteres.CaracteresCartaodeCredito(conta.InformacoesCliente);
            minimosdecaracteres.CaracteresMinimosCodigoSeguranca(conta.InformacoesCliente);
            minimosdecaracteres.CaracteresMinimosCpf(conta.InformacoesCliente);
            minimosdecaracteres.CaracteresMinimosRg(conta.InformacoesCliente);
            minimosdecaracteres.VerificarEmail(conta.conta);
            minimosdecaracteres.CaracteresMinimoSenha(conta.conta);
            
            camposvazios.CampoCartaoCredito(conta.InformacoesCliente);
            camposvazios.CampoCodigoSeguranca(conta.InformacoesCliente);
            camposvazios.CampoCpf(conta.InformacoesCliente);
            camposvazios.CampoNome(conta.InformacoesCliente);
            camposvazios.CampoEndereco(conta.InformacoesCliente);
            camposvazios.CampoRg(conta.InformacoesCliente);
            camposvazios.CampoTelefone(conta.InformacoesCliente);
            camposvazios.CampoVencimentoCartao(conta.InformacoesCliente);

            Models.Response.CriarContaRequest retorno = salvar.inserirnovaconta(conta);
            return retorno;
        }
    }
}