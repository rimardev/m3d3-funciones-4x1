function pintar(color = "green"){
  ele.style.backgroundColor = color;
};

let ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar("yellow"));