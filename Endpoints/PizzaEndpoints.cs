namespace PizzaStore.Endpoints;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using PizzaStore.Data;
using PizzaStore.Models;

public static class PizzaEndpoints
{
  public static void MapPizzaEndpoints(this IEndpointRouteBuilder endpoints)
  {
    endpoints.MapGet("/pizzas/{id}", (int id) => PizzaDB.GetPizza(id));
    endpoints.MapGet("/pizzas", () => PizzaDB.GetPizzas());
    endpoints.MapPost("/pizzas", (Pizza pizza) => PizzaDB.CreatePizza(pizza));
    endpoints.MapPut("/pizzas", (Pizza pizza) => PizzaDB.UpdatePizza(pizza));
    endpoints.MapDelete("/pizzas/{id}", (int id) => PizzaDB.RemovePizza(id));
  }
}
