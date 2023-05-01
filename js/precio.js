const select = document.getElementById("tamaño");
const precio = document.getElementById("precio");

select.addEventListener("change", () => {
  const medida = select.value;
  let precioUnitario = 0;

  switch(medida) {
    case "200 metros":
      precioUnitario = 12;
      break;
    case "400 metros":
      precioUnitario = 24;
      break;
    case "600 metros":
      precioUnitario = 36;
      break;
    case "800 metros":
      precioUnitario = 48;
      break;
    case "1000 metros":
        precioUnitario = 60;
        break;
    case "1200 metros":
      precioUnitario = 72;
      break;
    case "1400 metros":
      precioUnitario = 84;
      break;
    case "1600 metros":
      precioUnitario = 96;
      break;
    case "1800 metros":
      precioUnitario = 108;
      break;
    case "2000 metros":
      precioUnitario = 120;
      break;
    // Agregar más casos según sea necesario
  }

  precio.innerHTML = `${precioUnitario}€ por ${medida}`;
});
