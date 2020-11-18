using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_compra_livro")]
    public partial class TbCompraLivro
    {
        [Key]
        [Column("id_compra_livro")]
        public int IdCompraLivro { get; set; }
        [Column("id_livro")]
        public int? IdLivro { get; set; }
        [Column("id_compra")]
        public int? IdCompra { get; set; }

        [ForeignKey(nameof(IdCompra))]
        [InverseProperty(nameof(TbCompra.TbCompraLivro))]
        public virtual TbCompra IdCompraNavigation { get; set; }
        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbCompraLivro))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
