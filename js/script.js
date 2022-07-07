// Sticky header// Navigation bar Scrolling
window.onscroll = function() {
  navbarScroll()
};
document.getElementById("header-wrapper").className = "container-fluid unscrolled";
document.getElementById("backtotop").className = "backtotop unscrolled";

function navbarScroll() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 120) {
    document.getElementById("header-wrapper").className = "container-fluid scrolled";
    document.getElementById("backtotop").className = "backtotop scrolled";
  } else {
    document.getElementById("header-wrapper").className = "container-fluid unscrolled";
    document.getElementById("backtotop").className = "backtotop unscrolled";
    document.getElementById("desktoplogo").src = "img/logo.png";
    // $('.container').css({
    //   'padding-top': '0'
    // })
  }
};

// Shows and hides help button for FAQ/Contact Us Slide out
function hideButton() {
  $('#popoverTip').css({
    "right": "-225px",
    "transition": "1s"
  });
  $('#popoverTip').find('a').attr('onclick', 'showButton()');
  document.getElementById('tipButton').innerHTML = "Help";
  document.getElementsByClassName('buttonHide').className = "buttonHelp";
  $('.buttonHelp').attr('class', 'buttonHelp closedB');
};

function showButton() {
  $('#popoverTip').css({
    "right": "0",
    "transition": "1s"
  });
  $('#popoverTip').find('a').attr('onclick', 'hideButton()')
  document.getElementById('tipButton').innerHTML = "Hide";
  document.getElementsByClassName('buttonHelp').className = "buttonHide";
  $('.buttonHelp').attr('class', 'buttonHelp openedB');
};

// On hover change image and peak out character
$('.closedB').mouseenter(function() {
  $('.removeHover').attr('class', 'hoverChar');
});
$('.closedB').mouseleave(function() {
  $('.hoverChar').attr('class', 'removeHover');
});

// Scrolls page back to the top, when you click the top of page button.
function pageTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 'fast');
}
