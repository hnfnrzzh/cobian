document.getElementById("luasForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);
  if (isNaN(base) || isNaN(height)) {
    alert("Please enter valid numbers");
    return;
  }
  const area = 0.5 * base * height;
  document.getElementById("luasResult").textContent = `Luas Segitiga: ${area}`;
});

document.getElementById("kelilingForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);
  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    alert("Please enter valid numbers");
    return;
  }
  const perimeter = sideA + sideB + sideC;
  document.getElementById("kelilingResult").textContent = `Keliling Segitiga: ${perimeter}`;
});
