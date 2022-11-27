var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("disp");
function jsrun() {
  btn.onclick = function () {
    count++;
    disp.innerHTML = count;
  };
  if (count == 0) {
    var dateControl = document.querySelector('input[type="datetime-local"]');
    var countDownDate = dateControl.valueAsNumber;
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    document.getElementById("until").innerHTML = "until " + dateControl.value;
  } else {
    alert("Error! Submit button clicked more than once. Refreshing page.");
    location.reload();
  }
}
