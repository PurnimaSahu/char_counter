const text = document.getElementsByClassName("textarea")[0];

text.addEventListener("keyup", xyz);

var remaining = 0;

function xyz() {
  remaining = text.getAttribute("maxlength");

  r = remaining - text.value.length;

  document.getElementById("span2").innerHTML = `Remaining:${r}`;
  document.getElementById(
    "span1"
  ).innerHTML = `Total Character:${text.value.length}`;

  //   console.log("key is pressed");
}
