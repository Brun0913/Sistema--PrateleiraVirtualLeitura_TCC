using System;
using System.Collections;

namespace backend.Models.Request
{
    public class LoginRequest
    {
        public Models.Request.InformacoesClienteRequest InformacoesCliente {get;set;}
        public Models.Request.EmailRequest conta {get;set;}
    }
}