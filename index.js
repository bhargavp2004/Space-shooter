window.onload = function () {
  const boxElement = document.querySelector('.box');
  const imgElement = boxElement.querySelector('img');

  const boxRect = boxElement.getBoundingClientRect();
  const boxWidth = boxRect.width;

  console.log("right coordinate of box " + boxRect.right);

  console.log("height of box" + boxElement.clientHeight);

  const imgWidth = imgElement.width;
  console.log('box width ' + boxWidth);

  const offset = (boxWidth - imgWidth) / 2;

  imgElement.style.marginLeft = `${offset}px`;

  function moveLeft() {
    let marginLeft = parseInt(imgElement.style.marginLeft);
    let moveBy = 10;
    let newMarginLeft;

    if (marginLeft > 0) {
      newMarginLeft = marginLeft - moveBy;
    }

    imgElement.style.marginLeft = `${newMarginLeft}px`;
  }

  function moveRight() {
    let marginLeft = parseInt(imgElement.style.marginLeft);
    let moveBy = 10;
    let newMarginLeft;

    if (marginLeft < boxWidth - imgWidth) {
      newMarginLeft = marginLeft + moveBy;
    }

    imgElement.style.marginLeft = `${newMarginLeft}px`;
  }

  window.addEventListener('keydown', (e) => {
      let marginLeft = parseInt(imgElement.style.marginLeft);
      let moveBy = 10;
      let newMarginLeft;



      if (e.key === 'ArrowLeft') {
          if (parseInt(marginLeft) > parseInt(0)) {
              newMarginLeft = marginLeft - moveBy;
          }
      } else if (e.key === 'ArrowRight') {
          if (parseInt(marginLeft) < boxWidth - imgWidth) {
              newMarginLeft = marginLeft + moveBy;
          }
      } else if (e.key === 'ArrowUp') {
          launchBullet();
      }

      imgElement.style.marginLeft = `${newMarginLeft}px`;
  });

  // function checkCollision() {

  // }

  function launchBullet() {
      var bullet = document.createElement("div");
      var bulletImage = document.createElement("img");
      bulletImage.classList.add("bulletClass");
      bulletImage.setAttribute("src", "bullet.png");
      bullet.appendChild(bulletImage);
      bullet.classList.add("bullet");
      bullet.style.marginLeft = imgElement.style.marginLeft;
      console.log(bullet.style.marginLeft);
      bullet.style.marginLeft = parseInt(bullet.style.marginLeft) + parseInt(15) + "px";

      console.log(bullet.style.marginLeft);

      boxElement.appendChild(bullet);


      var moveBullet = setInterval(() => {
          var bulletBottom = parseInt(
              window.getComputedStyle(bullet).getPropertyValue("bottom")
          );

          bullet.style.bottom = bulletBottom + 2 + "px";

          if (bulletBottom >= boxElement.clientHeight - parseInt(25)) {
              clearInterval(moveBullet);
              bullet.remove();
          }


      }, 10);

      var removeAlien = setInterval(() => {
          var bullets = document.getElementsByClassName("bullet");
          var aliens = document.getElementsByClassName("alienClass");

          for (var i = 0; i < bullets.length; i++) {
              var bullet = bullets[i];
              var bulletRect = bullet.getBoundingClientRect();

              for (var j = 0; j < aliens.length; j++) {
                  var alien = aliens[j];
                  var alienRect = alien.getBoundingClientRect();

                  if (
                      bulletRect.left >= alienRect.left &&
                      bulletRect.right <= alienRect.right &&
                      bulletRect.top <= alienRect.top &&
                      bulletRect.bottom <= alienRect.bottom
                  ) {
                      alien.parentElement.removeChild(alien);
                      bullet.parentElement.removeChild(bullet);
                      // Update points
                      var pointsElement = document.getElementById("points");
                      var currentPoints = parseInt(pointsElement.innerHTML) + 1;
                      pointsElement.innerHTML = currentPoints;
                  }
              }
          }
      }, 1);

  }

  var generateAliens = setInterval(() => {
      var alienImage = document.createElement("img");
      alienImage.style.left = 0;
      alienImage.src = "alien.png";
      alienImage.classList.add("alienClass");

      var pos = Math.floor(Math.random() * 1000);
      console.log("position" + pos);

      alienImage.style.left = parseInt(pos) + 'px';

      console.log("left of alien" + alienImage.style.left);

      if (parseInt(alienImage.style.left) > 0 && parseInt(alienImage.style.left) < parseInt(parseInt(boxWidth) - parseInt(25))) {
          boxElement.appendChild(alienImage);
      }

      console.log(alienImage.getBoundingClientRect().left);

  }, 1500);

  var moveAliens = setInterval(() => {

      var ali = document.getElementsByClassName("alienClass");

      if (ali != undefined) {
          for (var i = 0; i < ali.length; i++) {
              var alien = ali[i];
              var alitop = parseInt(
                  window.getComputedStyle(alien).getPropertyValue("top")
              );

              alien.style.top = alitop + 20 + "px";

              if (parseInt(alien.style.top) >= parseInt(boxElement.clientHeight) - parseInt(40)) {
                  alert("GAME OVER");
                  clearInterval(moveAliens);
                  window.location.reload();
              }
          }
      }
  }, 300);

  var moveLeftBtn = document.getElementById('moveLeftBtn');
  moveLeftBtn.addEventListener('click', moveLeft);

  var moveRightBtn = document.getElementById('moveRightBtn');
  moveRightBtn.addEventListener('click', moveRight);

  var shootBtn = document.getElementById('shootBtn');
  shootBtn.addEventListener('click', launchBullet);


};


