using System;

namespace backend.Controllers.Business.BusinessFuncionario
{
    public class InserirNovoLivroParte1
    {
        public void campovaziolivro(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.NmLivro))
                throw new ArgumentException("Voce precisa inserir o nome do livro");
        }
        public void campovazioautor(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.NmAutor))
                throw new ArgumentException("Voce precisa inserir o nome do autor do livro");
        }
        public void campovaziopreco(Models.TbLivro req)
        {
            if(req.VlPreco == 0)
                throw new ArgumentException("Voce precisa definir um preço para o livro");
        }
        public void campovazioeditora(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.NmEditora))
                throw new ArgumentException("Voce precisa colocar o nome da editora do livro");
        }
        public void campovazionumeropaginas(Models.TbLivro req)
        {
            if(req.NrPaginas == 0)
                throw new ArgumentException("Voce precisa inserir o nome do livro");
        }
        public void campovaziosinopse(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.DsSinopse))
                throw new ArgumentException("Voce precisa inserir a sinopse do livro");
        }
        public void campovaziopublicacao(Models.TbLivro req)
        {
            if(req.DtPublicacao == null)
                throw new ArgumentException("Voce precisa inserir a data de publicacao do livro");
        }
        public void campovazioidioma(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.TpIdiomaOriginal))
                throw new ArgumentException("Voce precisa inserir o idioma do livro");
        }
        public void campovazioedicaolivro(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.DsEdicaoLivro))
                throw new ArgumentException("Voce precisa inserir a edição do livro");
        }
        public void campovaziogenero(Models.TbLivro req)
        {
            if(string.IsNullOrEmpty(req.DsGenero))
                throw new ArgumentException("Voce precisa definir o genero do livro");
        }
    }

}
