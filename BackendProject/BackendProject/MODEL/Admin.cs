using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BackendProject.MODEL
{
    public class Admin
    {
        [Key]
        public string id {  get; set; }
        public string Mail {  get; set; }
        public string Password {  get; set; }
        

    }
}
