using System;
using System.Linq;

namespace backend.Controllers.Database
{
    public class FuncoesFuncionarioDataBase
    {
        Models.TccContext db = new Models.TccContext();
        public Models.TbLivro apagar(Models.TbLivro id)
        {
            Models.TbLivro RegistroLivro = db.TbLivro.First(x => x.IdLivro == id.IdLivro);
            db.TbLivro.Remove(RegistroLivro);
            db.SaveChanges();

            return RegistroLivro;
        }
    }
}