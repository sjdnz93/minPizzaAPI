namespace PizzaStore.Data;

using PizzaStore.Models;

public class PastaDB
{
  private static List<Pasta> _pasta = new List<Pasta>()
  {
    new Pasta{ Id=1, Name="Spaghetti Bolognese", Description="Classic meat and tomato sauce with spaghetti" },
    new Pasta{ Id=2, Name="Carbonara", Description="White carbonara sauce from egg with bacon"},
    new Pasta{ Id=3, Name="Chilli Garlic Fettucine", Description="Shit loads of chilli and garlic on fettucine"}
  };

  public static List<Pasta> GetAllPasta()
  {
    return _pasta;
  }

  public static Pasta? GetPasta(int id)
  {
    return _pasta.SingleOrDefault(pasta => pasta.Id == id);
  }

  public static Pasta CreatePasta(Pasta pasta)
  {
    _pasta.Add(pasta);
    return pasta;
  }

  public static Pasta UpdatePasta(Pasta update)
  {
    _pasta = _pasta.Select(pasta =>
    {
      if (pasta.Id == update.Id)
      {
        pasta.Name = update.Name;
        pasta.Description = update.Description;
      }
      return pasta;
    }).ToList();
    return update;
  }

  public static void RemovePasta(int id)
  {
    _pasta = _pasta.FindAll(pasta => pasta.Id != id).ToList();
  }
}
