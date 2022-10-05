totalTip.style.display = "none";

function calculateTip(e) {
  let billAmount = document.getElementById("billamt").value;
  let select = document.querySelector("select");
  let serviceQuality = select.options[select.selectedIndex];
  let numberOfPeople = document.querySelector("#peopleamt").value;
  let totalTip = document.querySelector("#totalTip");
  let amount = document.querySelector("#tip");

  if (serviceQuality === 0 || billAmount === "") {
    alert("please enter service quality and bill amount");
  }
  if (numberOfPeople === "" || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  }
  let total = (billAmount * serviceQuality.value) / numberOfPeople;
  total.toFixed(2);
  totalTip.style.display = "block";
  amount.append(total);
}
