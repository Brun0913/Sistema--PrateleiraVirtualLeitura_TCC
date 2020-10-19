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
        [Column("id_compra", TypeName = "int(11)")]
        public int IdCompra { get; set; }
        [Column("dt_compra", TypeName = "date")]
        public DateTime? DtCompra { get; set; }
        [Column("tp_pagamento", TypeName = "varchar(100)")]
        public string TpPagamento { get; set; }
        [Column("vl_total", TypeName = "decimal(15,2)")]
        public decimal? VlTotal { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int? IdCliente { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbCompra))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdCompraNavigation")]
        public virtual ICollection<TbCompraLivro> TbCompraLivro { get; set; }
    }
}
