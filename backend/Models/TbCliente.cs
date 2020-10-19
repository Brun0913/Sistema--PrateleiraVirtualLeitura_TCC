using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_cliente")]
    public partial class TbCliente
    {
        public TbCliente()
        {
            TbCompra = new HashSet<TbCompra>();
        }

        [Key]
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("nm_cliente", TypeName = "varchar(100)")]
        public string NmCliente { get; set; }
        [Column("dt_nascimento", TypeName = "date")]
        public DateTime? DtNascimento { get; set; }
        [Column("ds_cpf", TypeName = "varchar(15)")]
        public string DsCpf { get; set; }
        [Column("ds_rg", TypeName = "varchar(15)")]
        public string DsRg { get; set; }
        [Column("ds_cartao_credito", TypeName = "varchar(100)")]
        public string DsCartaoCredito { get; set; }
        [Column("nr_codigo_seguranca", TypeName = "int(11)")]
        public int? NrCodigoSeguranca { get; set; }
        [Column("dt_vencimento_cartao", TypeName = "datetime")]
        public DateTime? DtVencimentoCartao { get; set; }
        [Column("ds_endereco", TypeName = "varchar(50)")]
        public string DsEndereco { get; set; }
        [Column("ds_telefone", TypeName = "varchar(50)")]
        public string DsTelefone { get; set; }
        [Column("id_login", TypeName = "int(11)")]
        public int? IdLogin { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbCliente))]
        public virtual TbLogin IdLoginNavigation { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbCompra> TbCompra { get; set; }
    }
}
