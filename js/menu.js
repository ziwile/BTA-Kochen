(function() {
  'use strict';
  var menuBtn, menu;
  menuBtn = document.getElementsByTagName('button')[0];
  menu = document.getElementsByTagName('nav')[0];

  if ('undefined' === typeof menuBtn || 'undefined' === typeof menu) {
    return;
  }

  menuBtn.onclick = function() {
    document.body.classList.toggle('overflow');
    menu.classList.toggle('show');
  };
})();
