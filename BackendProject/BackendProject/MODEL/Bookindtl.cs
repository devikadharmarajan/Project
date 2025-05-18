using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendProject.MODEL
{
    public class Bookindtl
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? Id {  get; set; }
        public string Name { get; set; }
        public string VehicleId { get; set; } 
        public string Bookstarttime {  get; set; }
        public string Bookendtime { get; set; }
        public string vehicletype {  get; set; }
    }
}
