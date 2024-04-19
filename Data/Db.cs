using Microsoft.EntityFrameworkCore;
using PizzaStore.Models;

namespace PizzaStore.Data
{
  class Db : DbContext
  {
    public Db(DbContextOptions<Db> options) : base(options) { }
    public DbSet<Pizza> Pizzas { get; set; } = null!;
    public DbSet<Pasta> Pastas { get; set; } = null!;
  }

}


