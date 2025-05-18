using System.ComponentModel.DataAnnotations;

namespace BackendProject.MODEL
{
    public class VehicleDtl
    {
        [Key]
        public int Vid {  get; set; }
        public string Name { get; set; }
        public string Model {  get; set; }
        public int Count {  get; set; }
        public string Vehicletype {  get; set; }
        public int Status { get; set; }
    }
}
