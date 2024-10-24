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

// ------------------------------------------------------

let key0 = document.getElementById("key0");
document.addEventListener("keydown", function(event){
  console.log(event.key);
  if (event.key === "a" || event.key === "A"){
    key0.style.backgroundColor = "pink"; 
  } else if (event.key === "s" || event.key === "S"){
    key0.style.backgroundColor = "orange";
  } else if (event.key === "d" || event.key === "D"){
    key0.style.backgroundColor = "lightblue";
  };
});

let key1 = document.getElementById("key1");
document.addEventListener("keydown", function(event){
  console.log(event.key);
  if (event.key === "q" || event.key === "Q"){
    key1.style.border = "1px solid gray";
    key1.style.borderRadius = "10px";
    key1.style.backgroundColor = "yellow";
  } else if (event.key === "w" || event.key === "W"){
    key1.style.border = "1px solid gray";
    key1.style.borderRadius = "10px";
    key1.style.backgroundColor = "royalblue";
  } else if (event.key === "e" || event.key === "E"){
    key1.style.border = "1px solid gray";
    key1.style.borderRadius = "10px";
    key1.style.backgroundColor = "brown";
  };
});