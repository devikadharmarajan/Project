
using BackendProject.DATA;
using Microsoft.EntityFrameworkCore;

namespace BackendProject
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<ApplicationDbContext>(options=>options.UseSqlServer(builder.Configuration.GetConnectionString("DeffCon")));
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp",
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:5173",
                "http://localhost:5174",
                "http://localhost:5175",
                "http://localhost:5176",
                " http://localhost:5177")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });
            var app = builder.Build();
            app.UseCors("AllowReactApp");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

           // app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            

            app.MapControllers();

            app.Run();
        }
    }
}
