let text = "";
let button = document.querySelectorAll(".butt");
var input = document.getElementById("result");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      text = eval(text);
      document.getElementById("result").value = text;
    } else if (e.target.innerHTML == "CA") {
      text = "";
      document.getElementById("result").value = text;
    } else if (e.target.innerHTML == "C") {
      text = text.slice(0, -1);
      document.getElementById("result").value = text;
    } else {
      text += e.target.innerHTML;
      document.getElementById("result").value = text;
    }
  });

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      text = eval(input.value);
      document.getElementById("result").value = text;
    }
  });
});
