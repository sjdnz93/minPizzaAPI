namespace PizzaStore.Endpoints;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using PizzaStore.Data;
using PizzaStore.Models;

public static class PastaEndpoints
{
  public static void MapPastaEndpoints(this IEndpointRouteBuilder endpoints)
  {
    endpoints.MapGet("/pasta/{id}", (int id) => PastaDB.GetPasta(id));
    endpoints.MapGet("/pasta", () => PastaDB.GetAllPasta());
    endpoints.MapPost("/pasta", (Pasta pasta) => PastaDB.CreatePasta(pasta));
    endpoints.MapPut("/pasta", (Pasta pasta) => PastaDB.UpdatePasta(pasta));
    endpoints.MapDelete("/pasta/{id}", (int id) => PastaDB.RemovePasta(id));
  }
}