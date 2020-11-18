using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_compra")]
    public partial class TbCompra
    {
        public TbCompra()
        {
            TbCompraLivro = new HashSet<TbCompraLivro>();
        }

        [Key]
        [Column("id_compra")]
        public int IdCompra { get; set; }
        [Column("dt_compra", TypeName = "date")]
        public DateTime DtCompra { get; set; }
<<<<<<< HEAD
        [Column("vl_total", TypeName = "decimal(15,2)")]
        public decimal? VlTotal { get; set; }
        [Column("id_cliente")]
=======
        public decimal VlTotal { get; set; }
>>>>>>> a1993ea7bea383b5ada5a1ddcd02e7d2f4364ad4
        public int? IdCliente { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbCompra))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdCompraNavigation")]
        public virtual ICollection<TbCompraLivro> TbCompraLivro { get; set; }
    }
}
