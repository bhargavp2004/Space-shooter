var h1_div_main = document.createElement("h1");
h1_div_main.classList.add("h1_div_main_style");
var text_h1 = document.createTextNode("SPACE SHOOTER");
h1_div_main.appendChild(text_h1);
document.body.appendChild(h1_div_main);

var bgargav = document.getElementById("bhargav");
document.body.style.backgroundColor = "#343635";

//This is the box which is having space image
var big_box = document.createElement("div");
big_box.classList.add("big_box_style");
// big_box.classList.add("big_box_style");

document.body.appendChild(big_box);
document.body.style.overflowY = "hidden";

// creating 'SPACE SHOOTER' text

var h1_div = document.createElement("h1");
var inner_text = document.createTextNode("SPACE SHOOTER");
h1_div.classList.add("h1_div_style");
h1_div.appendChild(inner_text);

big_box.appendChild(h1_div);
//creating a 'START GAME' button

var start_button = document.createElement("BUTTON");
var text_inside_button = document.createTextNode("START GAME");

start_button.appendChild(text_inside_button);

// //adding style to the 'START BUTTON'

start_button.classList.add("start_button_style");
big_box.appendChild(start_button);

//clicking the button will change some attributes of image

start_button.onclick = function () {
  start_button.style.display = "none";
  big_box.style.marginLeft = "250px";
  big_box.style.marginRight = "250px";
  h1_div.style.display = "none";
  big_box.style.textAlign = "center";
  h1_div_main.style.display = "block";

  var shooter = document.createElement("img");
  shooter.setAttribute("src", "rocket.png");
  shooter.classList.add("shooter_style");

  big_box.appendChild(shooter);

  let elem = document.querySelector(".shooter_style");
  let rect = elem.getBoundingClientRect(); //get the position of element

  let elem2 = document.querySelector(".big_box_style");
  let rect2 = elem2.getBoundingClientRect();

  var shooter = document.querySelector(".shooter_style");
  window.addEventListener("load", () => {
    shooter.style.position = "absolute";
    shooter.style.left = "929px"; //setting initial position
    shooter.style.top = "872px";
  });

  var moveBy = 10;

  window.addEventListener("keydown", (e) => {
    var rect = elem.getBoundingClientRect();
    console.log(rect.x);
    var LeftBoundry = 258;
    var RightBoundry = 1599;
    switch (e.key) {
      case "ArrowLeft":
        if (rect.x > LeftBoundry) {
          shooter.style.left = parseInt(rect.x) - moveBy + "px"; //rect.x is left position                                                                                                                                                                                                   //rect.y is top position
        }
        break;
      case "ArrowRight":
        if (rect.x < RightBoundry) {
          shooter.style.left = parseInt(rect.x) + moveBy + "px";
        }
        break;
      case "ArrowUp":
        var gun = document.createElement("div");
        gun.classList.add("gun");
        bhargav.appendChild(gun);

        var movegun = setInterval(() => {
          var gunbottom = parseInt(
            window.getComputedStyle(gun).getPropertyValue("bottom")
          );
          gun.style.bottom = gunbottom + 4 + "px";
          gun.style.left = rect.x + 39 + "px";
        });
        // shooter.style.top = parseInt(rect.y) - moveBy + 'px';
        break;
      case "ArrowDown":
        shooter.style.top = parseInt(rect.y) + moveBy + "px";
        break;
    }
  });


  

  // window.addEventListener('keyup', (e) => {
  //     let rect = elem.getBoundingClientRect();
  //     switch (e.key) {
  //         case 'ArrowLeft':
  //             shooter.style.left = parseInt(rect.x) - 0 + 'px';                              //rect.x is left position
  //             break;                                                                              //rect.y is top position
  //         case 'ArrowRight':
  //             shooter.style.left = parseInt(rect.x) + 0 + 'px';
  //             break;
  //         case 'ArrowUp':
  //             shooter.style.top = parseInt(rect.y) - 0 + 'px';
  //             break;
  //         case 'ArrowDown':
  //             shooter.style.top = parseInt(rect.y) + 0 + 'px';
  //             break;
  //     }
  // });
};
