using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers.Database
{
    public class ListagemTbDatabase
    {
        Models.TccContext db = new Models.TccContext();
        public List<Models.TbLivro> consultarTbLivros()
        {
            List<Models.TbLivro> livros = db.TbLivro.ToList();
            return livros;
        }
    }
}