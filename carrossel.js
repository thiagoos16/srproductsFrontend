
  
  var listEl = document.querySelector('.home-grid.prodRecommend-grid.prodRecommend-grid--max-3');
  var btnLeftEl = document.querySelector('#btnPrev');
  var btnRightEl = document.querySelector('#btnNext');
  var count = 0;

  function slideImages(dir) {
        var totalChildren = listEl.querySelectorAll(".prodRecommend").length;
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

        //btnLeftEl.style.display = count < 0 ? "block" : "none";
        // Here, 4 is the number displayed at any given time
        //btnRightEl.style.display = count > 3-totalChildren ? "block" : "none";
  }

  btnLeftEl.addEventListener("click", function(e) {
      slideImages("left");
  });
  btnRightEl.addEventListener("click", function(e) {
      slideImages("right");
  });


