using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using PizzaStore.Data;
using PizzaStore.Models;

namespace PizzaStore.Endpoints
{
  public static class PizzaEndpoints
  {
    public static void MapPizzaEndpoints(this IEndpointRouteBuilder endpoints, IApplicationBuilder app)
    {
      endpoints.MapGet("/pizzas", async (HttpContext context) =>
      {
        var db = context.RequestServices.GetService<Db>();
        if (db != null)
        {
          return await db.Pizzas.ToListAsync();
        }
        else
        {
          throw new Exception("Database not found");
        }
      });
      endpoints.MapPost("/pizzas", async (HttpContext context, Pizza pizza) =>
      {
        var db = context.RequestServices.GetService<Db>();
        if (db != null)
        {
          await db.Pizzas.AddAsync(pizza);
          await db.SaveChangesAsync();
          return Results.Created($"/pizza/{pizza.Id}", pizza);
        }
        else
        {
          throw new Exception("Database not found");
        }
      });
    }
  }
}


