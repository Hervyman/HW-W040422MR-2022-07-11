const ball = document.getElementById("a");
const personalInfo = document.getElementById("b");
const carCard = document.getElementById("c");
const bgDanger = document.getElementById("d");


ball.style =
  "width: 200px; height: 200px; border: solid; border-radius: 50%; background: linear-gradient(90deg, #49B93A 0%, #fff 100%);";
personalInfo.innerHTML = `<ul> <li>Ari</li>
<li>Weisberg</li> <li>Tel Aviv</li>
<li>HackerU</li> </ul>`;

let car = {
  title: "Car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};

carCard.innerHTML =
  `<div class="card" style="width: 18rem;">
<div class="card-header">
 ` +
  car.title +
  `
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"> Price: ` +
  car.price +
  `  </li>
  <li class="list-group-item">Hand: ` +
  car.hand +
  `</li>
  <li class="list-group-item">KM: ` +
  car.km +
  `</li>
  <li class="list-group-item">Year: ` +
  car.year +
  `</li>
  </ul>
</div> <br><br>`;

bgDanger.className = `bg-danger`;