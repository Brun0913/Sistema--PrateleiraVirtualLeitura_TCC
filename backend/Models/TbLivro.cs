using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_livro")]
    public partial class TbLivro
    {
        public TbLivro()
        {
            TbCompraLivro = new HashSet<TbCompraLivro>();
        }

        [Key]
        [Column("id_livro")]
        public int IdLivro { get; set; }
        [Column("nm_livro", TypeName = "varchar(50)")]
        public string NmLivro { get; set; }
        [Column("nm_autor", TypeName = "varchar(50)")]
        public string NmAutor { get; set; }
        [Column("nr_serie", TypeName = "varchar(50)")]
        public string NrSerie { get; set; }
        [Column("nm_editora", TypeName = "varchar(50)")]
        public string NmEditora { get; set; }
        [Column("nr_paginas")]
        public int? NrPaginas { get; set; }
        [Column("ds_sinopse", TypeName = "varchar(300)")]
        public string DsSinopse { get; set; }
        [Column("dt_publicacao", TypeName = "date")]
        public DateTime DtPublicacao { get; set; }
        [Column("tp_idioma_original", TypeName = "varchar(100)")]
        public string TpIdiomaOriginal { get; set; }
        [Column("ds_edicao_livro", TypeName = "varchar(100)")]
        public string DsEdicaoLivro { get; set; }
        [Column("ds_genero", TypeName = "varchar(100)")]
        public string DsGenero { get; set; }
<<<<<<< HEAD
        [Column("vl_preco", TypeName = "decimal(15,2)")]
        public decimal? VlPreco { get; set; }
        [Column("img_imagem", TypeName = "varchar(100)")]
=======
        public decimal VlPreco { get; set; }
>>>>>>> a1993ea7bea383b5ada5a1ddcd02e7d2f4364ad4
        public string ImgImagem { get; set; }

        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbCompraLivro> TbCompraLivro { get; set; }
    }
}
