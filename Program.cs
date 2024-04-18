using Microsoft.OpenApi.Models;
using PizzaStore.Endpoints;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new OpenApiInfo
  {
    Title = "PizzaStore API",
    Description = "Making the pizzas you love",
    Version = "v1"
  });
});

builder.Services.AddCors(); // Add this line to register CORS services

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
});

app.UseRouting();

app.UseCors(builder =>
{
  builder.WithOrigins("http://localhost:5173") // Adjust this to your React app's URL
        .AllowAnyMethod()
        .AllowAnyHeader();
});

app.MapPizzaEndpoints();
app.MapPastaEndpoints();

app.Run();
