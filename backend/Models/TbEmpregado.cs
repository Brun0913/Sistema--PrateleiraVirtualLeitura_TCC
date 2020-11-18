using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_empregado")]
    public partial class TbEmpregado
    {
        [Key]
        [Column("id_empregado")]
        public int IdEmpregado { get; set; }
        [Column("nm_empregado", TypeName = "varchar(100)")]
        public string NmEmpregado { get; set; }
        [Column("dt_nascimento", TypeName = "date")]
        public DateTime? DtNascimento { get; set; }
        [Column("ds_cpf", TypeName = "varchar(15)")]
        public string DsCpf { get; set; }
        [Column("ds_cep", TypeName = "varchar(15)")]
        public string DsCep { get; set; }
        [Column("ds_rg", TypeName = "varchar(15)")]
        public string DsRg { get; set; }
        [Column("ds_carteira_trabalho", TypeName = "varchar(50)")]
        public string DsCarteiraTrabalho { get; set; }
        [Column("ds_cargo", TypeName = "varchar(50)")]
        public string DsCargo { get; set; }
        [Column("ds_carga_horaria_semanal", TypeName = "varchar(100)")]
        public string DsCargaHorariaSemanal { get; set; }
        [Column("vl_salario", TypeName = "decimal(15,2)")]
        public decimal? VlSalario { get; set; }
        [Column("id_login")]
        public int? IdLogin { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbEmpregado))]
        public virtual TbLogin IdLoginNavigation { get; set; }
    }
}
