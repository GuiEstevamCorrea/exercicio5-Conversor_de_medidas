const medida = prompt("Escreva o valor em metros para a conversão");

const unidade = prompt(
  "Escolha a Unidade de medida que deseja?" +
    "\n1. Milímetros(mm)" +
    "\n2. Centímetros(cm)" +
    "\n3. Decímetro(dm)" +
    "\n4. Decâmetro(dam)" +
    "\n5. Hectômetro(hm)" +
    "\n6. Quilômetro(km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção Inválida.");
}
