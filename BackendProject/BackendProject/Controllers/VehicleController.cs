using BackendProject.DATA;
using BackendProject.MODEL; 
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        public readonly ApplicationDbContext _context;
        public VehicleController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("VehicleDetails")]   //get vehicle dtl
        public async Task<ActionResult<IEnumerable<VehicleDtl>>> GetCompany()
        {
            try
            {
                var vehicles = await _context.VehicleDtls.ToListAsync();
                return Ok(vehicles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
        [HttpPost("AddVehicleAdmin")]    //admin add vehicle dtl
        [HttpPost]
        public async Task<ActionResult<VehicleDtl>> AddVehicle(VehicleDtl vehicle)
        {
            if (vehicle == null)
            {
                return BadRequest("Vehicle data is missing.");
            }

            _context.VehicleDtls.Add(vehicle);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCompany), new { id = vehicle.Vid}, vehicle);
        }
        //booking dtl
        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Bookindtl>>> GetUserBookings(int userId)
        {
            var bookings = await _context.Bookindtl
                .Where(b => b.Id==Convert.ToString( userId))
                .ToListAsync();

            if (bookings == null || bookings.Count == 0)
            {
                return NotFound($"No bookings found for user ID {userId}.");
            }

            return Ok(bookings);
        }
        //booking vehicle
        
        [HttpPost("Bookingvehicle")]
        public async Task<ActionResult<Bookindtl>> BookVehicle(Bookindtl booking)
        {
            if (booking == null)
            {
                return BadRequest("Booking details are missing.");
            }

            _context.Bookindtl.Add(booking);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Booked!" });
            //return CreatedAtAction(nameof(GetUserBookings), new { id = booking.Id }, booking);
        }
        

        //user registration
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] Userdtl newUser)
        {
            if (string.IsNullOrEmpty(newUser.UserName) || string.IsNullOrEmpty(newUser.Mail))
            {
                return BadRequest("Username and Mail are required.");
            }

            _context.Userdtl.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully!", userId = newUser.UserId });
        }

       
        [HttpPost("Login")]  //userlogin
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Userdtl.SingleOrDefaultAsync(u => u.Mail == request.Email && u.Password == request.Password);

            if (user == null)
                return Unauthorized(new { message = "Invalid email or password" });

            return Ok(new
            {
                message = "Login successfully",
                userId = user.UserId,
                userName = user.UserName,
                mail = user.Mail
            });
        }

        [HttpPost("Adminlogin")]  //userlogin
                                  //public async Task<IActionResult> AdminLogin([FromBody] LoginRequest request)
                                  //{
                                  //    var user = await _context.Admins.SingleOrDefaultAsync(u => u.Mail== request.Email && u.Password == request.Password);

        //    if (user == null)
        //        return Unauthorized(new { message = "Invalid id or password" });

        //    return Ok(new
        //    {
        //        message = "Login successfully",
        //        userId = user.id

        //    });
        //}
        public async Task<IActionResult> AdminLogin([FromBody] LoginRequest request)//admin user
        {
            var user = await _context.Admins.SingleOrDefaultAsync(u => u.Mail == request.Email && u.Password == request.Password);

            if (user == null)
                return Unauthorized(new { message = "Invalid ID or password" });

            return StatusCode(200, new
            {
                status = 200,
                message = "Login successfully",
                userId = user.id
            });
        }

        [HttpGet("Booking/dtl")]//shoe booking dtl
        public async Task<ActionResult<IEnumerable<Bookindtl>>> GetAllBookings()
        {
            var bookings = await _context.Bookindtl.ToListAsync();

            if (bookings == null || bookings.Count == 0)
            {
                return NotFound(new { Message = "No bookings found." });
            }

            return Ok(bookings);
        }



    }

}
