let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");

function changeBlack(box) {
  console.log(box);
  if (box == "box1"){
    box1.style.backgroundColor = "black";
  } else if (box == "box2"){
    box2.style.backgroundColor = "black";    
  } else if (box == "box3"){
    box3.style.backgroundColor = "black";
  } else if (box == "box4"){
    box4.style.backgroundColor = "black";
  };
};

box1.addEventListener("click", () => changeBlack("box1"));
box2.addEventListener("click", () => changeBlack("box2"));
box3.addEventListener("click", () => changeBlack("box3"));
box4.addEventListener("click", () => changeBlack("box4"));