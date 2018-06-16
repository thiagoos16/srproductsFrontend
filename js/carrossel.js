
  
  var listEl = document.querySelector('.prod-recommend-grid.prod-recommend-grid--max-3');
  var btnLeftEl = document.querySelector('#btn-prev');
  var btnRightEl = document.querySelector('#btn-next');
  var count = 0;

  function slideImages(dir) {
        var totalChildren = listEl.querySelectorAll(".produto").length;
        console.log(totalChildren);
        dir === "left" ? ++count : --count;
        listEl.style.left = count * 215 + 'px';
        console.log(count);

        if (count < 0) {
            btnLeftEl.style.display = "block";
            btnLeftEl.style.fill = "rgb(7,76,140)";
        } else {
            btnLeftEl.style.fill = "rgb(128, 120, 120, 0.842)";
            btnLeftEl.style.display = "none";
        }

        // Here, 3 is the number displayed at any given time
        if (count > 3-totalChildren) {
            btnRightEl.style.display = "block";
            btnRightEl.style.fill = "rgb(7,76,140)";
        } else {
            btnRightEl.style.fill = "rgb(128, 120, 120, 0.842)";
            btnRightEl.style.display = "none";
        }
  }

  btnLeftEl.addEventListener("click", function(e) {
      slideImages("left");
  });
  btnRightEl.addEventListener("click", function(e) {
      slideImages("right");
  });


