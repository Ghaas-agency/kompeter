(function() {
  var heroBackground = document.getElementsByClassName('index-hero__background')[0];
  var heroBackgroundChildren = heroBackground.children;
  var state = 0;
  
  setInterval(function() {
    for (var i = 0; i < heroBackgroundChildren.length; i++) {
      if (state === i) {
        heroBackgroundChildren[i].style.opacity = 1;
      } else {
        heroBackgroundChildren[i].style.opacity = 0;
      }
    }
    if (state === 5) {
      state = 0;
    } else {
      state++;
    }
  }, 4000);
})();
