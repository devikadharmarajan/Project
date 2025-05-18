using System.ComponentModel.DataAnnotations;

namespace BackendProject.MODEL
{
    public class Userdtl
    {
        [Key]
        public int UserId {  get; set; }
        public string UserName { get; set; }
        public string Mail {  get; set; }
        public string MobNo {  get; set; }
        public string Password {  get; set; }
        public string Address {  get; set; }

    }
}
