using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using PizzaStore.Data;
using PizzaStore.Models;

namespace PizzaStore.Endpoints
{
  public static class PastaEndpoints
  {
    public static void MapPastaEndpoints(this IEndpointRouteBuilder endpoints, IApplicationBuilder app)
    {
      endpoints.MapGet("/pasta", async (HttpContext context) =>
      {
        var db = context.RequestServices.GetService<Db>();
        if (db != null)
        {
          return await db.Pastas.ToListAsync();
        }
        else 
        {
          throw new Exception("Database not found");
        }
      });

      endpoints.MapPost("/pasta", async (HttpContext context, Pasta pasta) =>
      {
        var db = context.RequestServices.GetService<Db>();
        if (db != null)
        {
          await db.Pastas.AddAsync(pasta);
          await db.SaveChangesAsync();
          return Results.Created($"/pasta/{pasta.Id}", pasta);
        }
        else
        {
          throw new Exception("Database not found");
        }
      });
    }
  }
}


