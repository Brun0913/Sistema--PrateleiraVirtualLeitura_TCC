using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Utils.ConversorGerenteUtils
{
    public class GerarEmailFuncionario
    {
        public Models.TbLogin criaremailfunc(Models.Request.RequestGerente.RequestGerente req)
        {
            Models.TbLogin conta = new Models.TbLogin();

            string primeironome = req.nomefuncionario.Substring(0, req.nomefuncionario.IndexOf(" "));
            int qtd = primeironome.Length + 1;
            string segundonome = req.nomefuncionario.Substring(qtd, req.nomefuncionario.IndexOf(" "));

            string email = primeironome + segundonome + "@gmail.com";
            string senha = req.nascimentofuncionario.Day.ToString() + req.nascimentofuncionario.Month.ToString() + req.nascimentofuncionario.Year.ToString(); 

            conta.DsEmail = email;
            conta.DsSenha = senha;
            conta.DsPerfil = "funcionario";

            return conta;
        }
    }
}