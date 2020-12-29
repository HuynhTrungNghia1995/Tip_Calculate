
document.getElementById("calButton").addEventListener("click", function (event) {
    event.preventDefault();
    var totalMoney = document.getElementById("totalMoney").value;
    var numPeople = document.getElementById("numPeople").value;
    var tipPercent = document.getElementById("tipPercent").value;
    var totalTip = (((totalMoney * tipPercent) / 100) / numPeople)
    console.log(totalTip)
    document.getElementById("tipResult").style.display = "block";
    document.getElementById("tipAmount").innerHTML = "" + totalTip;
})

