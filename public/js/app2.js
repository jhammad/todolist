var circle = document.getElementById("circle");
var color = circle.querySelector("circle").getAttribute("fill");
// get circle element and change the color to red when clicked and back to original color when clicked again
circle.addEventListener("click", function() {
  if (color === "red") {
    circle.querySelector("circle").setAttribute("fill", "yellow");
    color = "yellow";
  } else {
    circle.querySelector("circle").setAttribute("fill", "red");
    color = "red";
  }
});



