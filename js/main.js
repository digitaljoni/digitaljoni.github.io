jQuery(document).ready(function(e) {
  e(".scroll").click(function(t) {
    t.preventDefault();
    e("html,body").animate({
      scrollTop: e(this.hash).offset().top
    }, 1e3)
  })
});


function initMobileMenu(toggle, menu) {
  menu.classList.add('mobile-menu-closed');
  ['click', 'touchstart'].forEach(function(eventName) {
    toggle.addEventListener(eventName, function(evt) {
      evt.preventDefault();
      menu.classList.toggle('mobile-menu-open');
      menu.classList.toggle('mobile-menu-closed');
    });
  });
}

var toggle = document.getElementById('mobile-menu-toggle');
var menu = document.getElementById('main-nav-mobile');
initMobileMenu(toggle, menu);
